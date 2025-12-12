import placeholder from '../../assets/project-placeholder.jpg';
import Github from "../../assets/icons/Github";
import Link from "../../assets/icons/Link";
import Readme from "../../assets/icons/Read";

export default function WorkItems({ item, onViewReadme }) {
    const {
        id, image, title, url, github, tech = [], points = []
    } = item;

    return (
        <article className="work__card" key={id} aria-labelledby={`proj-${id}-title`}>
            <div className="work__img">
                <img src={image ? image : placeholder} alt={`${title} preview`} loading="lazy" decoding="async" />
            </div>

            <div className="work__content">
                <div className="work__head">
                    <h3 id={`proj-${id}-title`} className="work__title">{title}</h3>
                    <div className="work__tech">
                        {tech.slice(0, 8).map(t => (
                            <span key={t} className="work__tech-tag">{t}</span>
                        ))}
                    </div>
                </div>

                <ul className="work__bullets" aria-label={`${title} highlights`}>
                    {points.slice(0, 5).map((p, i) => <li key={i} className="work__bullet">{p}</li>)}
                </ul>

                <div className="work__links">
                    <a
                        href={url || '#'}
                        className="button button--flex work__button"
                        target={url && url !== '#' ? "_blank" : undefined}
                        rel={url && url !== '#' ? "noopener noreferrer" : undefined}
                        aria-label={`Open ${title} live demo`}
                        data-analytics={`cta_live_${id}`}
                    >
                        Demo <Link />
                    </a>

                    <a
                        href={github}
                        className="button button--flex work__button"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${title} GitHub`}
                        data-analytics={`cta_github_${id}`}
                    >
                        Github <Github />
                    </a>

                    <button
                        type="button"
                        className="button button--flex work__button work__view-readme"
                        onClick={() => onViewReadme()}
                        aria-label={`View ${title} README`}
                        data-analytics={`cta_readme_${id}`}
                    >
                        View README  <Readme />
                    </button>
                </div>
            </div>
        </article>
    );
};
