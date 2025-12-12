import './Skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import Cloud from './Cloud';

export default function Skills() {
    return (
        <section className="skills section" id="skills" aria-labelledby="skills-heading">
            <div>
                <h2 id="skills-heading" className="section__title">Skills</h2>
                <span className="section__subtitle">My technical level</span>

                <div className="skills__container  grid" role="list">
                    <Frontend />
                    <Backend />
                    <Cloud />
                </div>
            </div>
        </section>
    );
}
