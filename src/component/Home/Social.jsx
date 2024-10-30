
export default function Social() {
    const linkedinUsername = import.meta.env.VITE_LINKEDIN_USERNAME;
    const twitterUsername = import.meta.env.VITE_TWITTER_USERNAME;

    return (
        <div className="home__social">
            <a href={`https://www.linkedin.com/in/${linkedinUsername}`} className="home__social-icon" target="_blank">
                <i class="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://github.com/vishwakarma-vishal" className="home__social-icon" target="_blank">
                <i class="uil uil-github"></i>
            </a>

            <a href={`https://twitter.com/${twitterUsername}`} className="home__social-icon" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 512 512" ><g clip-path="url(#clip0_84_15698)"><rect width="512" height="512" rx="60"></rect><path fill="var(--title-color)" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"></path></g><defs><clipPath id="clip0_84_15698"><rect width="512" height="512" fill="#fff"></rect></clipPath></defs></svg>
            </a>

            {/* can add more */}
        </div>
    )
};