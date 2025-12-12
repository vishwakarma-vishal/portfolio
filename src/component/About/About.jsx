import './About.css';
import Info from './Info';
import AboutImg from '../../assets/profile.png';
import Save from '../../assets/icons/Save';

export default function About() {

    // resume path from env (fallback to public folder file)
    const resumePath = import.meta.env.VITE_RESUME_PATH || '/Vishal_Vishwakarma_FullStack.pdf';

    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className='about__container container grid'>
                <img
                    src={AboutImg}
                    alt="Vishal Vishwakarma profile"
                    className='about__img'
                />

                <div className='about__data'>
                    <Info />

                    <p className='about__description'>
                        I’m a Full-Stack Engineer who builds real-time, low-latency collaborative apps and scalable APIs.
                        I work across the stack — backend architecture and real-time communication systems, plus performant,
                        production-ready frontends. I enjoy solving complex problems and shipping features that perform under load.
                    </p>

                    <a
                        href={resumePath}
                        download="Vishal_Vishwakarma_FullStack_Developer.pdf"
                        className='button button--flex'
                        aria-label="Download my resume"
                    >
                        Download Resume
                        <Save />
                    </a>
                </div>
            </div>
        </section>
    );
}
