import React from 'react';
import { Link } from 'react-scroll';
import styles from './Footer.module.css';
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <motion.div
        className={styles.footerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <motion.h2 variants={item}>Curious About What I Do<span>?</span></motion.h2>
        <motion.div className={styles.footerContents} variants={container}>
          <motion.div className={styles.btnContainer} variants={item}>
            <Link to='projects' smooth={true} duration={500}>
              <button className={styles.myworks}>My Works</button>
            </Link>
            <button className={styles.resume}>Resume</button>
          </motion.div>
          <motion.div className={styles.allrightsContainer} variants={item}>
            <p>&copy;2025 Charlie Sumalag</p>
            <p>All Rights Reserved.</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footer;
