import Scroll from "../../assets/icons/Scroll";

export default function ScrollDown() {
    return (
        <div className="home__scroll" role="navigation" aria-label="Scroll down to about">
            <a href="#about" className="home__scroll-button button--flex" aria-label="Scroll to about section" data-analytics="scroll_to_about">
                <Scroll />
                <span className="home__scroll-name">Scroll Down</span>
                <i className="uil uil-arrow-down home__scroll-arrow" aria-hidden="true"></i>
            </a>
        </div>
    );
}
