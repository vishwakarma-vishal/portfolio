import Hand from "../../assets/icons/Hand";
import Send from "../../assets/icons/Send";

export default function Data() {
    return (
        <div className="home__data">
            <h1 className="home__title">
                Vishal Vishwakarma
                <Hand className="home__hand" />
            </h1>

            <h2 className="home__subtitle">Full Stack Engineer</h2>

            <div className="home__description">
                <p>I build real-time, low-latency collaborative apps and scalable APIs using Next.js, Node.js, TypeScript & PostgreSQL.</p>

                {/* New availability line — subtle, clean, matches your current design */}
                <span className="home__availability">
                    Available for SDE-1 / Full-Stack roles • Remote or relocate
                </span>
            </div>



            <div className="home__cta-bottom">
                <a
                    href="#contact"
                    className="button button--flex home__cta home__cta-contact"
                    aria-label="Say hello and contact"
                >
                    Say Hello
                    <Send className="home__send-icon" />
                </a>
            </div>
        </div>
    );
}
