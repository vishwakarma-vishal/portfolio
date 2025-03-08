import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import Send from "../../assets/icons/Send";
import Twitter from "../../assets/icons/Twitter";

export default function Contact() {
    const form = useRef();
    const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS;
    const linkedinUsername = import.meta.env.VITE_LINKEDIN_USERNAME;
    const twitterUsername = import.meta.env.VITE_TWITTER_USERNAME;

    //to send the mail
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_MAIL_SERVICE_ID,
                import.meta.env.VITE_MAIL_TEMPLATE_ID,
                form.current, {
                publicKey: import.meta.env.VITE_MAIL_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        // add toaster for confirmation
        e.target.reset();
    };

    return (
        <div className="contact containter section" id='contact'>
            <h3 className="section__title">Get in touch</h3>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="uil uil-linkedin-alt contact__card-icon"></i>

                            <h3 className="contact__card-title">Linkedin</h3>
                            <span className="contact__card-data">@vis***01</span>

                            <a href={`https://www.linkedin.com/in/${linkedinUsername}`} className="contact__button" target="_blank" rel="noopener noreferrer">
                                Connect with me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                           <Twitter/>
                            <h3 className="contact__card-title">Twitter</h3>
                            <span className="contact__card-data">@vi***de</span>

                            <a
                                href={`https://twitter.com/${twitterUsername}`} className="contact__button"
                                target="_blank"
                                rel="noopener noreferrer">
                                Follow me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">vi*****@gmail.com</span>

                            <a href={`mailto:${emailAddress}`} className="contact__button">
                                Write me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your poject</h3>

                    <form className="contact__form" ref={form} onSubmit={sendEmail}>
                        <div className="contact__form-div">
                            <label
                                htmlFor="name"
                                className="contact__form-tag">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="contact__form-input"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="contact__form-div">
                            <label
                                htmlFor="email"
                                className="contact__form-tag">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="contact__form-input"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label
                                htmlFor="project"
                                className="contact__form-tag">
                                Project
                            </label>
                            <textarea
                                name="project"
                                id="project"
                                cols="30"
                                rows="10"
                                required
                                className="contact__form-input"
                                placeholder="Write your project"
                            ></textarea>
                        </div>

                        <button type='submit' value="Send" className="button button--flex">
                            Send Message
                           <Send/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};