import Header from "./component/Header/Header.jsx";
import Home from './component/Home/Home';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Qualification from './component/Qualification/Qualification';
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
        <Qualification />
        <Work />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </div>
  )
}

export default App