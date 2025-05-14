import React from 'react'
import { motion, stagger } from "framer-motion";
import styles from './About.module.css';
import profile from "/img/profile.png";
import box from "/img/box.png";
import circles from "/img/circles.png";
import whiteArrow from "/img/whitearrow.png";

const About = () => {
    const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <div className={styles.aboutMainContainer}>
        <motion.div className={styles.aboutContents} variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <motion.h2 variants={item}>My Story<span>.</span></motion.h2>
            <motion.div className={styles.contensContainer}>
                <motion.div variants={item} className={styles.left}>
                    <motion.p  >I'm Charlie Sumalag, a Bachelor of Science in Information Technology (BSIT) graduate with a strong passion for web development. I’ve built a solid foundation in both front-end and back-end technologies, including HTML, CSS, Tailwind, JavaScript, React, PHP, and Laravel. While pursuing my degree, I also took the initiative to enhance my skills through online courses on Udemy, deepening my understanding of web technologies beyond the classroom.<br></br><br></br>
                    Through academic projects and collaborative work, I’ve developed practical experience in programming, web design, and problem-solving. I’m particularly drawn to full-stack development and am eager to contribute to real-world projects where I can apply my knowledge to build innovative and meaningful solutions in the tech industry
                    </motion.p>
                </motion.div>
                <motion.div className={styles.right}  variants={item}>
                    <img className={styles.profile} src={profile} alt="" />
                    <img className={styles.box} src={box} alt="" />
                    <img className={styles.whiteArrow} src={whiteArrow} alt="" />
                    <img className={styles.circles} src={circles} alt="" />
                </motion.div>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default About
