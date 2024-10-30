import { useState, useEffect } from 'react';
import './Header.css';
import { CiSun } from "react-icons/ci";

function Header() {
    // Scroll header effect
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (window.scrollY >= 80) header.classList.add("scroll-header");
            else header.classList.remove("scroll-header");
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // State for menu toggle in mobile
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    // State for dark mode
    const [darkMode, setDarkMode] = useState(false);

    // Use effect to set the theme based on system preference
    useEffect(() => {
        const systemPreference = window.matchMedia("(prefers-color-scheme: dark)");

        // Function to handle theme changes
        const handleThemeChange = (e) => {
            setDarkMode(e.matches);
            document.documentElement.classList.toggle('dark', e.matches);
        };

        // Set initial theme based on system preference
        handleThemeChange(systemPreference);
        
        // Add event listener for changes in system theme preference
        systemPreference.addEventListener('change', handleThemeChange);

        // Clean up event listener on unmount
        return () => {
            systemPreference.removeEventListener('change', handleThemeChange);
        };
    }, []);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };

    return (
        <header className='header'>
            <nav className='nav container'>
                {/* Logo */}
                <a href="index.html" className="nav__logo">Vishal</a>

                {/* Menu */}
                <div className={Toggle ? "nav__menu show__menu" : "nav__menu"}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home"
                                onClick={() => setActiveNav("#home")}
                                className={activeNav === "#home" ? 'nav__link active-link' : "nav__link"}>
                                <i className='uil uil-estate nav__icon'></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about"
                                onClick={() => setActiveNav("#about")}
                                className={activeNav === "#about" ? 'nav__link active-link' : "nav__link"}>
                                <i className='uil uil-user nav__icon'></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills"
                                onClick={() => setActiveNav("#skills")}
                                className={activeNav === "#skills" ? 'nav__link active-link' : "nav__link"}>
                                <i className='uil uil-file-alt nav__icon'></i>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services"
                                onClick={() => setActiveNav("#services")}
                                className={activeNav === "#services" ? 'nav__link active-link' : "nav__link"}>
                                <i className='uil uil-briefcase-alt nav__icon'></i>Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio"
                                onClick={() => setActiveNav("#portfolio")}
                                className={activeNav === "#portfolio" ? 'nav__link active-link' : "nav__link"}>
                                <i className='uil uil-scenery nav__icon'></i>Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact"
                                onClick={() => setActiveNav("#contact")}
                                className={activeNav === "#contact" ? 'nav__link active-link' : "nav__link"}>
                                <i className='uil uil-message nav__icon'></i>Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                {/* Mobile menu toggle and dark mode toggle as a unit */}
                <div className='nav__menu-toggle'>
                    <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
                        <i className="uil uil-apps"></i>
                    </div>
                    <button onClick={toggleDarkMode} className="dark-mode-toggle">
                        {darkMode ? '🌙' : '☀️'}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
