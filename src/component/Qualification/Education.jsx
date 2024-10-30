
export default function Education() {

    return (
        <div className="qualification__content" >
            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">MCA</h3>
                    <span className="qualification__subtitle">RGPV - University</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>2022 - present
                    </div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>

                {/* this div is only for styling */}
                <div>
                </div>
            </div>

            <div className="qualification__data">
                {/* this div is only for styling */}
                <div >
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>

                <div>
                    <h3 className="qualification__title">BSC (CS)</h3>
                    <span className="qualification__subtitle">Vikram University</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>2018 - 2021
                    </div>
                </div>
            </div>

            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">12th (Maths)</h3>
                    <span className="qualification__subtitle">MP Board</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>2017 - 2018
                    </div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
            </div>

            <div className="qualification__data">
                <div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>

                <div>
                    <h3 className="qualification__title">10th</h3>
                    <span className="qualification__subtitle">MP Board</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>2015 - 2016
                    </div>
                </div>
            </div>
        </div>
    )
};