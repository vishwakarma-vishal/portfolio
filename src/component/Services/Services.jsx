import { useState } from 'react';
import './Services.css';

export default function Services() {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="services section" id='services'>
            <h3 className="section__title">Services</h3>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container">
                <div className="services__content">
                    <div>
                        <i className='uil uil-web-grid services__icon'></i>
                        <h3 className="services__title">Responsive <br /> Web Design</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Responsive Web Design</h3>
                            <p className="services__modal-description">Fresher with hands-on project experience, dedicated to delivering quality work.</p>

                            <ul className="services__modal-services ">

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> Building intuitive and responsive user interfaces.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Creating and implementing web page layouts.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Designing UX element interactions.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Strengthening branding through appealing web design.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Developing mockups and prototypes for web products.</p>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>

                <div className="services__content">
                    <div>
                        <i className='uil uil-arrow services__icon'></i>
                        <h3 className="services__title">UI/UX <br /> Designer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">UI/UX Designer</h3>
                            <p className="services__modal-description">Fresher with hands-on project experience, dedicated to delivering quality work.</p>

                            <ul className="services__modal-services">

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Creating intuitive interfaces.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Designing and implementing web layouts.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Crafting interactive elements.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Positioning company branding through design.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Developing visual prototypes to showcase web products.</p>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>

                <div className="services__content">
                    <div>
                    <i class="uil uil-database services__icon"></i>
                        <h3 className="services__title">Backend Development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Backend Development</h3>
                            <p className="services__modal-description">Fresher with hands-on project experience, dedicated to delivering quality work.</p>

                            <ul className="services__modal-services">

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Crafting RESTful APIs for seamless data exchange.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Utilizing MongoDB for efficient data management.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Implementing JWT for secure user authentication.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Developing scalable server-side logic with Node.js and Express.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Securing passwords with bcrypt for enhanced security.</p>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
};