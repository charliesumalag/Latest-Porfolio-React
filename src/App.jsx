import React, {useEffect} from 'react'
import { Element } from 'react-scroll';
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import Certificates from './components/certificates/Certificates'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

   useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // only animate once
    });
  }, []);

  return (
    <div>
      <Element name='hero'><Hero /></Element>
      <Element name='projects'><Projects /></Element>
       <Element name='certificates'><Certificates /></Element>
       <Element name='about'><About /></Element>
       <Element name='contact'><Contacts /></Element>
        <Element name='footer'><Footer /></Element>
    </div>
  )
}

export default App
