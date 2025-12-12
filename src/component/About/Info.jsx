export default function Info() {
    return (
        <div className="about__info">

            <div className="about__box" aria-hidden="false">
                <i className='bx bx-award about__icon' aria-hidden="true"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">SDE Intern (4 month)</span>
            </div>

            <div className="about__box" aria-hidden="false">
                <i className='bx bx-briefcase about__icon' aria-hidden="true"></i>
                <h3 className="about__title">Projects</h3>
                <span className="about__subtitle">10+ projects</span>
            </div>

            <div className="about__box" aria-hidden="false">
                <i className='bx bx-code-alt about__icon' aria-hidden="true"></i>
                <h3 className="about__title">Leetcode</h3>
                <span className="about__subtitle">350+ DSA</span>
            </div>

        </div>
    );
}
