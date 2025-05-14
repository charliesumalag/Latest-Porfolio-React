import React, {useEffect, useState} from 'react'
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import Certificates from './components/certificates/Certificates'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from './components/button/Button';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

return (
  <div>
      <Element name='hero'>
        <div>
          <Hero />
        </div>
      </Element>
      <Element name='projects'>
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        >
          <Projects />
        </motion.div>
      </Element>
      <Element name='certificates'><Certificates /></Element>
      <Element name='about'><About /></Element>
      <Element name='contact'><Contacts /></Element>
      <Element name='footer'><Footer /></Element>
      <Button text='my works' />
    </div>
  )
}

export default App
