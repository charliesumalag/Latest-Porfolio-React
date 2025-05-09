import React, { useEffect, useState } from 'react'
import styles from './Hero.module.css';
import Nav from '../nav/Nav';
import arrow from "/img/Arrow.png";
import arrow1 from "/img/Arrow1.png";

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


  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContents}>
        <Nav />
        <div className={styles.heroCenterContents}>
          <h2 className={styles.first}>HELLO I'M</h2>
          <h1>Charlie <span className={styles.lastName}>Sumalag</span></h1>
          <img src={arrow} alt="" />
          <span className={styles.copyright}>&copy;</span>
          <h2 className={styles.third}>A Passionate <span>{displayText}</span></h2>
          <div className={styles.btnContainer}>
            <button className={styles.myworks}>MY WORKS</button>
            <button className={styles.resume} >RESUME</button>
          </div>
        </div>
        <div className={styles.based}>
          <p>14.5995 N, 120.9842 S</p>
          <h4>MANILA, PHILIPPINES</h4>
        </div>
        <div className={styles.scrollContainer}>
          <img src={arrow1} alt="" />
          <p className={styles.scroll}>SCROLL</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
