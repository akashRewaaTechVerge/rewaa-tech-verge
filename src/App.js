
import './App.css';
import About from './components/About/About';
import Analysis from './components/Analysis/Analysis';
import Banner from './components/Banner/Banner';
import Boost from './components/Boosting/Boost';
import ChooseUs from './components/ChooseUs/ChooseUs';
import Features from './components/Feature/Features';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Service from './components/Services/Service';
import Team from './components/Team/Team';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Features/>
    <About/>
    <Service/>
    <ChooseUs/>
    <Boost/>
    <Projects/>
    <Team/>
    <Testimonial/>
    <Analysis/>
    <Footer/>
    </>
  );
}

export default App;
