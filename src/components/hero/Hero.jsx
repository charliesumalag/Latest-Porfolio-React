import React, { useEffect, useState } from 'react'
import { motion, stagger } from "framer-motion";
import { Link } from 'react-scroll';
import styles from './Hero.module.css';
import Nav from '../nav/Nav';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const text = 'WEB DEVELOPER';
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(text.substring(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
        }
      } else {
        setDisplayText(text.substring(0, index - 1));
        setIndex((prev) => prev - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    };

    const interval = setInterval(handleTyping, speed);
    return () => clearInterval(interval);
  }, [index, isDeleting, speed]);

  const parent = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
  const child = {
    hidden: { opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <div className={styles.heroContainer}>
      <motion.div className={styles.heroContents} variants={parent} initial="hidden" whileInView="show"   viewport={{ once: true }}>
        <Nav />
        <motion.div className={styles.heroCenterContents} variants={child} >
          <motion.h2 className={styles.first} variants={item}>HELLO I'M</motion.h2>
          <motion.h1 variants={item}>
            <span className={styles.myName}>
              <span className={styles.firstNameContainer}>Charlie</span>
              <span className={styles.lastNameContainer}>Sumalag
                  <span className={styles.copyright}>&copy;</span>
              </span>
            </span>
          </motion.h1>
          <motion.h2 className={styles.third} variants={item}>A Passionate <span>{displayText}</span></motion.h2>
          <motion.div className={styles.btnContainer} variants={child} >
            <Link to='contact' smooth={true} duration={500}><motion.button className={styles.myworks} variants={item}>Get In Touch</motion.button></Link>
            <motion.button className={styles.resume}  variants={item}>Browse Projects</motion.button>
          </motion.div>
        </motion.div>
        <motion.div className={styles.heroSectionBottom} variants={child}>
          <motion.div className={styles.based} variants={child}>
            <motion.p variants={item}>14.5995 N, 120.9842 S</motion.p>
            <motion.h4 className={styles.basedHead} variants={item}>MANILA, PHILIPPINES</motion.h4>
          </motion.div>
          <motion.div className={styles.scrollContainer} variants={item}>
            <p className={styles.scroll}>SCROLL <i class="fa-solid fa-arrow-down"></i></p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
