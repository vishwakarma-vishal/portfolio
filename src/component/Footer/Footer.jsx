import './Footer.css';

export default function Footer() {

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__container">
                    <h1 className="footer__title">Vishal</h1>

                    <ul className="footer__list">
                        <li>
                            <a href="#about" className="footer__link">About</a>
                        </li>

                        <li>
                            <a href="#portfolio" className="footer__link">Portfolio</a>
                        </li>

                        <li>
                            <a href="#testimonials" className="footer__link">Testimonials</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__container">
                    <div className="footer__social">
                        <a href="https://www.linkedin.com/in/vishwakarma-vishal2001/" className="footer__social-link" target="_blank">
                            <i class="uil uil-linkedin-alt"></i>
                        </a>

                        <a href="https://github.com/vishwakarma-vishal" className="footer__social-link" target="_blank">
                            <i class="uil uil-github"></i>
                        </a>

                        <a href="https://x.com/vishaldev29" className="footer__social-link" target="_blank">

                            <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" fill="none" viewBox="0 0 512 512" ><g clip-path="url(#clip0_84_15698)"><rect width="512" height="512" rx="60"></rect><path fill="var(--container-color)" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"></path></g><defs><clipPath id="clip0_84_15698"><rect width="512" height="512" fill="#fff"></rect></clipPath></defs></svg>
                        </a>
                    </div>
                    <span className="footer__copy">&#169; Momentcoder, All rights reserved</span>
                </div>
            </div>
        </footer>
    )
};