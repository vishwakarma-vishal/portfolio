import './About.css';
import Info from './Info';
import AboutImg from '../../assets/profile.png';
import CV from '../../assets/Vishal-CV.pdf';
import Save from '../../assets/icons/Save';

export default function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className='about__container container grid'>
                <img src={AboutImg} alt="about image" className='about__img' />

                <div className='about__data'>
                    <Info />

                    <p className='about__description'>
                        I’m a Full Stack Engineer specializing in Next.js, Node.js, TypeScript, PostgreSQL, and real-time systems. I enjoy building production-grade applications — from backend architecture and API design to clean, responsive UI. I’ve developed real-time collaborative tools, AI-powered apps, and scalable full-stack platforms.
                    </p>

                    <a download='' href={CV} alt='resume file' className='button button--flex'>
                        Downlaod CV
                        <Save />
                    </a>
                </div>
            </div>
        </section>
    )
};