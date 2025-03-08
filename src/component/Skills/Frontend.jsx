export default function Frontend() {
    const skills = [
        { name: "HTML", level: "Intermediate" },
        { name: "CSS", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "Git", level: "Intermediate" },
        { name: "React JS", level: "Intermediate" },
        { name: "TypeScript", level: "Basic" }
    ];

    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend Development</h3>

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