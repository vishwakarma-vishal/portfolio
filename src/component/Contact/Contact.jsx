import "./Contact.css";
import Twitter from "../../assets/icons/Twitter";

export default function Contact() {
    const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS;
    const linkedinUsername = import.meta.env.VITE_LINKEDIN_USERNAME;
    const twitterUsername = import.meta.env.VITE_TWITTER_USERNAME;

    return (
        <div className="contact containter section" id='contact'>
            <div>
                <h3 className="section__title">Get in touch</h3>
                <span className="section__subtitle">Contact Me</span>

                <div className="contact__container container">
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
                        <Twitter />
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
        </div>
    )
};