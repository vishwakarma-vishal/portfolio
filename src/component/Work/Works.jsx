// Works.jsx
import { useEffect, useState } from "react";
import { projectData } from "./Data";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";
import ReadmeModal from "./ReadmeModal";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || ''; // optional

export default function Works() {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);
    const [readme, setReadme] = useState(null);
    const [readmeMeta, setReadmeMeta] = useState({ title: '', loading: false, error: null });

    useEffect(() => {
        if (item.name === 'all') setProjects(projectData);
        else {
            const newProjects = projectData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleChange = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    }

    // get the owner and repo info from url
    function parseGithubUrl(url) {
        try {
            const u = new URL(url);
            const path = u.pathname.replace(/^\/|\/$/g, ''); // trim slashes
            const parts = path.split('/');
            if (parts.length >= 2) return { owner: parts[0], repo: parts[1] };
        } catch (err) { /* invalid url */ }
        return null;
    }

    // UTF-8-safe base64 -> string decoder (preserves emoji)
    function b64DecodeUnicode(b64) {
        const cleaned = b64.replace(/\s/g, '');
        const binary = atob(cleaned);
        const bytes = Uint8Array.from([...binary].map(ch => ch.charCodeAt(0)));
        if (typeof TextDecoder !== 'undefined') {
            return new TextDecoder('utf-8').decode(bytes);
        }
        // fallback for very old environments
        let percentEncoded = '';
        for (let i = 0; i < bytes.length; i++) {
            percentEncoded += '%' + ('00' + bytes[i].toString(16)).slice(-2);
        }
        return decodeURIComponent(percentEncoded);
    }

    // Main README fetcher (paste/replace existing)
    async function fetchReadmeFromGithub(githubUrl) {
        setReadmeMeta({ title: 'Loading…', loading: true, error: null });
        setReadme(null);

        const parsed = parseGithubUrl(githubUrl);
        if (!parsed) {
            setReadmeMeta({ title: 'Error', loading: false, error: 'Invalid GitHub URL' });
            return;
        }

        const { owner, repo } = parsed;
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/readme`;
        const headers = { Accept: 'application/vnd.github.v3+json' };
        if (GITHUB_TOKEN) headers.Authorization = `token ${GITHUB_TOKEN}`;

        // 1) Try GitHub API (returns content in base64)
        try {
            const res = await fetch(apiUrl, { headers });
            if (res.ok) {
                const json = await res.json();
                const content = json.content || '';
                if (!content) {
                    // unexpected - try fallback
                    console.warn('GitHub API returned no content for readme');
                } else {
                    try {
                        const decoded = b64DecodeUnicode(content);
                        setReadme(decoded);
                        setReadmeMeta({ title: `${owner}/${repo} — README`, loading: false, error: null });
                        return;
                    } catch (decErr) {
                        console.warn('Decoding README failed', decErr);
                        // continue to fallback
                    }
                }
            } else {
                console.warn('GitHub API returned', res.status);
                // allow fallback
            }
        } catch (err) {
            console.warn('GitHub API fetch error', err);
            // continue to fallback
        }

        // 2) Fallback: try raw.githubusercontent for likely branches
        const branches = ['main', 'master'];
        for (const branch of branches) {
            const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/README.md`;
            try {
                const r = await fetch(rawUrl);
                if (r.ok) {
                    const text = await r.text();
                    setReadme(text);
                    setReadmeMeta({ title: `${owner}/${repo} — README (${branch})`, loading: false, error: null });
                    return;
                }
            } catch (err) {
                console.warn(`Raw fallback (${branch}) error`, err);
            }
        }

        // 3) Final fallback: instruct user to open repo
        const repoUrl = `https://github.com/${owner}/${repo}`;
        setReadmeMeta({
            title: 'README not available',
            loading: false,
            error: `Couldn't fetch README automatically. Open the repo on GitHub: ${repoUrl}`
        });
    }


    // Called when WorkItems triggers readme view
    function handleViewReadme(githubUrl, title = '') {
        setReadmeMeta({ title: `Loading ${title} README…`, loading: true, error: null });
        fetchReadmeFromGithub(githubUrl);
    }

    return (
        <div className="container">
            <div className="work__filters">
                {projectsNav.map((it, index) => (
                    <span
                        onClick={(e) => handleChange(e, index)}
                        className={`${active === index ? "active-work " : ""}work__item`}
                        key={index}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter') handleChange(e, index); }}
                        aria-pressed={active === index}
                    >
                        {it.name}
                    </span>
                ))}
            </div>

            <div className="work__container">
                {projects.map((p) => (
                    <WorkItems key={p.id} item={p} onViewReadme={() => handleViewReadme(p.github, p.title)} />
                ))}
            </div>

            {(readme || readmeMeta.loading || readmeMeta.error) && (
                <ReadmeModal
                    readme={readme}
                    meta={readmeMeta}
                    onClose={() => { setReadme(null); setReadmeMeta({ title: '', loading: false, error: null }); }}
                />
            )}
        </div>
    );
};
