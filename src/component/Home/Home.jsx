import './Home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

export default function Home() {

    return (
        <section className='home section' id='home'>
            {/* remove grid class from below div */}
            <div className="home__container container">
                <div className="home__content grid">
                    <Social />

                    <Data />

                    <div className="home__img">
                    </div>
                </div>

                <ScrollDown />
            </div>
        </section>
    )
};