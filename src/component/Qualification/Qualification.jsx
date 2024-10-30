import './Qualification.css';
import { useState } from 'react';
import Education from './Education';
import Experience from './Experience';

export default function Qualification() {
    // to switch the qualification tab
    const [tab, setTab] = useState("Education");

    const toggleTab = (data) => {
        setTab(data);
    }

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container ">
                <div className="qualification__tabs">
                    <div
                        className={tab === "Education" ?
                            "qualification__button qualification__active button-flex" : "qualification__button button-flex"}
                        onClick={() => toggleTab("Education")}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "}Education
                    </div>

                    <div
                        className={tab === "Experience" ?
                            "qualification__button qualification__active button-flex" : "qualification__button button-flex"}
                        onClick={() => toggleTab("Experience")}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    {tab === "Education" ?
                        <Education />
                        :
                        <Experience />
                    }
                </div>
            </div>
        </section>
    )
};