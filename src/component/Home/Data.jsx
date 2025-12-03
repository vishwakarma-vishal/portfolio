import Hand from "../../assets/icons/Hand";
import Send from "../../assets/icons/Send";

export default function Data() {

    return (
        <div className="home__data">
            <h1 className="home__title">Vishal Vishwakarma
                <Hand />
            </h1>
            <h2 className="home__subtitle">Full Stack Engineer</h2>
            <p className="home__description">
                Ex-SDE Intern @ Tecell | Building real-time, scalable & high-performance apps with Next.js, Node.js, TypeScript & PostgreSQL
            </p>

            <a href="#contact" className="button button--flex">
                Say Hello
                <Send />
            </a>
        </div>
    )
};