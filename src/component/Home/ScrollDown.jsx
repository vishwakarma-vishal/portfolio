import Scroll from "../../assets/icons/Scroll";

export default function ScrollDown() {

    return (
        <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
                <Scroll />
                <span className="home__scroll-name">Scroll Down</span>
                <i class="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
        </div>
    )
};