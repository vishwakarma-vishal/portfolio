import { useEffect } from "react";
import { useState } from "react"
import { projectData } from "./Data"
import { projectsNav } from "./Data"
import WorkItems from "./WorkItems"

export default function Works() {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);

    const [active, setActive] = useState(0);

    // logic to change project based on category
    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectData);
        }
        else {
            const newProjects = projectData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    //function that change category
    const handleChange = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    }

    return (
        <div className="container">
            <div className="work__filters">
                {projectsNav.map((item, index) => {
                    return (
                        < span
                            // to change the category
                            onClick={(e) => {
                                handleChange(e, index);
                            }}
                            className={`${active === index ? "active-work " : ""}work__item`}
                            key={index}
                        >
                            {item.name}
                        </span>
                    )
                })}
            </div>

            <div className="work__container">
                {projects.map((item) => {
                    return <WorkItems item={item} key={item.id} />
                })}
            </div>
        </div >
    )
};