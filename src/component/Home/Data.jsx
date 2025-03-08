import Hand from "../../assets/icons/Hand";
import Send from "../../assets/icons/Send";

export default function Data() {

    return (
        <div className="home__data">
            <h1 className="home__title">Vishal Vishwakarma
                <Hand />
            </h1>
            <h2 className="home__subtitle">Full Stack Developer</h2>
            <p className="home__description">SDE Intern @ Tecell | Building Scalable & High-Performance Web Apps with React.js & Node.js Magic</p>

            <a href="#contact" className="button button--flex">
                Say Hello
                <Send />
            </a>
        </div>
    )
};