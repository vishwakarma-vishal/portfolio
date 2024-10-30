import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

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
                            <i class="uil uil-linkedin-alt contact__card-icon"></i>

                            <h3 className="contact__card-title">Linkedin</h3>
                            <span className="contact__card-data">@vis***01</span>

                            <a href={`https://www.linkedin.com/in/${linkedinUsername}`} className="contact__button" target="_blank" rel="noopener noreferrer">
                                Connect with me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <svg className="contact__card-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 512 512" ><g clip-path="url(#clip0_84_15698)"><rect width="512" height="512" rx="60"></rect><path fill="var(--title-color)" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"></path></g><defs><clipPath id="clip0_84_15698"><rect width="512" height="512" fill="#fff"></rect></clipPath></defs></svg>

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
                            <svg
                                class="button__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                    fill="var(--container-color)"
                                ></path>
                                <path
                                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                    fill="var(--container-color)"
                                ></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};