export default function Backend() {
    const skills = [
        { name: "Node.js", level: "Advanced" },
        { name: "WebSockets", level: "Proficient" },
        { name: "Prisma ORM", level: "Proficient" },
        { name: "PostgreSQL", level: "Proficient" },
        { name: "Express.js", level: "Proficient" },
        { name: "MongoDB", level: "Intermediate" },
    ];

    return (
        <article className="skills__content" role="listitem" aria-label="Backend skills">
            <h3 className="skills__title">Backend Development</h3>

            <div className="skills__box">
                <div className="skills__group" role="list">
                    {skills.slice(0, 3).map(skill => (
                        <div className="skills__data" key={skill.name} role="listitem">
                            <i className='bx bx-badge-check' aria-hidden="true"></i>
                            <div>
                                <h4 className="skills__name">{skill.name}</h4>
                                <span className="skills__level">{skill.level}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills__group" role="list">
                    {skills.slice(3).map(skill => (
                        <div className="skills__data" key={skill.name} role="listitem">
                            <i className='bx bx-badge-check' aria-hidden="true"></i>
                            <div>
                                <h4 className="skills__name">{skill.name}</h4>
                                <span className="skills__level">{skill.level}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}
