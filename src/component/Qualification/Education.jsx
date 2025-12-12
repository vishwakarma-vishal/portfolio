export default function Education() {
    return (
        <div className="qualification__content">
            {/* MCA */}
            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">MCA (Master of Computer Applications)</h3>
                    <span className="qualification__subtitle">Mahakal Institute of Technology & Management (RGPV)</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i> 2022 – 2024 <i>(CGPA: 7.39)</i>
                    </div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>

                {/* placeholder for symmetry */}
                <div />
            </div>

            {/* BSc (Computer Science) */}
            <div className="qualification__data">
                {/* empty for left column spacing */}
                <div></div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>

                <div>
                    <h3 className="qualification__title">B.Sc. (Computer Science)</h3>
                    <span className="qualification__subtitle">Advance Science & Commerce College (Vikram University)</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i> 2018 – 2021 <i>(CGPA: 7.70)</i>
                    </div>
                </div>
            </div>

            {/* Higher Secondary */}
            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">Higher Secondary (12th — PCM)</h3>
                    <span className="qualification__subtitle">MP Board</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i> 2017 – 2018 <i>(Percentage: 83%)</i>
                    </div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>

                <div />
            </div>

            {/* Secondary */}
            <div className="qualification__data">
                <div></div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>

                <div>
                    <h3 className="qualification__title">Secondary (10th)</h3>
                    <span className="qualification__subtitle">MP Board</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i> 2015 – 2016 <i>(Percentage: 88%)</i>
                    </div>
                </div>
            </div>
        </div>
    );
}
