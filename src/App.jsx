import Header from "./component/Header/Header.jsx";
import Home from './component/Home/Home';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Services from './component/Services/Services';
import Qualification from './component/Qualification/Qualification';
import Testimonials from './component/Testimonials/Testimonials';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import ScrollUp from './component/ScrollUP/ScrollUp';
import Work from './component/Work/Work';

function App() {

  return (
    <div>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work/>
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </div>
  )
}

export default App