import './About.css';
import Info from './Info';
import AboutImg from '../../assets/profile.jpg';
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
                        I’m a Full-Stack Developer specializing in the MERN stack, building scalable and high-performance web applications. I develop backend APIs, optimize databases, and work with cloud services like AWS.
                        Explore my projects to see how I use React, Node.js, and MongoDB to create seamless and efficient user experiences.
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