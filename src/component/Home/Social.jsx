import Github from "../../assets/icons/Github";
import Leetcode from "../../assets/icons/Leetcode";
import Linkedin from "../../assets/icons/Linkedin";
import Twitter from "../../assets/icons/Twitter";

export default function Social() {
    const linkedinUsername = import.meta.env.VITE_LINKEDIN_USERNAME || '';
    const twitterUsername = import.meta.env.VITE_TWITTER_USERNAME || '';
    const githubUsername = import.meta.env.VITE_GITHUB_USERNAME || '';
    const leetcodeUsername = import.meta.env.VITE_LEETCODE_USERNAME || '';

    // Helper to build safe hrefs (if username missing, link to '#')
    const buildHref = (base, username) => username ? `${base}${username}` : '#';

    return (
        <div className="home__social" aria-label="Social links">
            <a
                href={buildHref('https://leetcode.com/u/', leetcodeUsername)}
                className="home__social-icon"
                target={leetcodeUsername ? "_blank" : undefined}
                rel={leetcodeUsername ? "noopener noreferrer" : undefined}
                title="LeetCode"
                aria-label="LeetCode profile">
                <Leetcode />
            </a>

            <a
                href={buildHref('https://www.linkedin.com/in/', linkedinUsername)}
                className="home__social-icon"
                target={linkedinUsername ? "_blank" : undefined}
                rel={linkedinUsername ? "noopener noreferrer" : undefined}
                title="LinkedIn"
                aria-label="LinkedIn profile">
                <Linkedin />
            </a>

            <a
                href={buildHref('https://github.com/', githubUsername)}
                className="home__social-icon"
                target={githubUsername ? "_blank" : undefined}
                rel={githubUsername ? "noopener noreferrer" : undefined}
                title="GitHub"
                aria-label="GitHub profile">
                <Github />
            </a>

            <a
                href={buildHref('https://twitter.com/', twitterUsername)}
                className="home__social-icon"
                target={twitterUsername ? "_blank" : undefined}
                rel={twitterUsername ? "noopener noreferrer" : undefined}
                title="Twitter"
                aria-label="Twitter profile">
                <Twitter />
            </a>
        </div>
    );
}
