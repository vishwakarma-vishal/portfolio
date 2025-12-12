import './Home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

export default function Home() {
    return (
        <section className='home section' id='home' aria-labelledby="home-heading">
            <div className="home__container container">
                <div className="home__content grid">
                    <Social />

                    <Data />

                    {/* Profile image: keep as background image (visual unchanged), but exposed for accessibility */}
                    <div className="home__img" role="img" aria-label="Vishal Vishwakarma — Full-Stack Engineer profile photo"></div>
                </div>

                <ScrollDown />
            </div>
        </section>
    );
}
