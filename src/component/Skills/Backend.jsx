
export default function Backend() {
    const skills = [
        { name: "MongoDB", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
        { name: "Next.js", level: "Intermediate" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "Node.js", level: "Intermediate" },
        { name: "C++", level: "Intermediate" }
    ];

    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Development</h3>

            <div className="skills__box">
                <div className="skills__group">
                    {skills.slice(0, 3).map(skill => (
                        <div className="skills__data" key={skill.name}>
                            <i className='bx bx-badge-check'></i>
                            <div>
                                <h3 className="skills__name">{skill.name}</h3>
                                <span className="skills__level">{skill.level}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills__group">
                    {skills.slice(3).map(skill => (
                        <div className="skills__data" key={skill.name}>
                            <i className='bx bx-badge-check'></i>
                            <div>
                                <h3 className="skills__name">{skill.name}</h3>
                                <span className="skills__level">{skill.level}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};