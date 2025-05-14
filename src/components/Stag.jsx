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
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //   });
  // }, []);
   const parentContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 1, // Delay between child-containers
      }
    }
  };

  // Each child-container has its own stagger for h1 and p
  const childContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
return (
      <motion.div
      variants={parentContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="parent-container"
    >
      {/* First child-container */}
      <motion.div
        variants={childContainer}
        className="child-container"
      >
        <motion.div variants={item}>
          <h1>Charlie Sumalag</h1>
        </motion.div>
        <motion.div variants={item}>
          <p>First block paragraph...</p>
        </motion.div>
        <motion.div variants={item}>
          <p>First block paragraph...</p>
        </motion.div>
      </motion.div>

      {/* Second child-container */}
      <motion.div
        variants={childContainer}
        className="child-container"
      >
        <motion.div variants={item}>
          <h1>Charlie Sumalag</h1>
        </motion.div>
        <motion.div variants={item}>
          <p>Second block paragraph...</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default App


{/* <div>
      <Element name='hero'> <Hero /> </Element>
      <Element name='projects'> <Projects /> </Element>
      <Element name='certificates'><Certificates /></Element>
      <Element name='about'><About /></Element>
      <Element name='contact'><Contacts /></Element>
      <Element name='footer'><Footer /></Element>
      <Button text='my works' />
    </div> */}
