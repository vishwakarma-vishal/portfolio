export default function Frontend() {
    const skills = [
        { name: "Tailwind", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "React.js", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "Git", level: "Intermediate" }
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