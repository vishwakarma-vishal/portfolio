import Github from "../../assets/icons/Github";
import Leetcode from "../../assets/icons/Leetcode";
import Linkedin from "../../assets/icons/Linkedin";
import Twitter from "../../assets/icons/Twitter";

export default function Social() {
    const linkedinUsername = import.meta.env.VITE_LINKEDIN_USERNAME;
    const twitterUsername = import.meta.env.VITE_TWITTER_USERNAME;
    const githubUsername = import.meta.env.VITE_GITHUB_USERNAME;
    const leetcodeUsername = import.meta.env.VITE_LEETCODE_USERNAME;

    return (
        <div className="home__social">
            <a
                href={`https://leetcode.com/u/${leetcodeUsername}`}
                className="home__social-icon"
                target="_blank"
                title="leetcode">
                <Leetcode />
            </a>

            <a
                href={`https://www.linkedin.com/in/${linkedinUsername}`}
                className="home__social-icon"
                target="_blank"
                title="linkedin">
                <Linkedin />
            </a>

            <a
                href={`https://github.com/${githubUsername}`}
                className="home__social-icon"
                target="_blank"
                title="github">
                <Github />
            </a>

            <a
                href={`https://twitter.com/${twitterUsername}`}
                className="home__social-icon"
                target="_blank"
                title="twitter">
                <Twitter />
            </a>

            {/* can add more */}
        </div>
    )
};