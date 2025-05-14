import React from 'react'
import styles from './CertificateContent.module.css';
import { motion } from 'framer-motion';
const CertificateContent = ({title, teacher, list, link}) => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const fadeItem = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };
  return (
  <div className={styles.contentsContainer}>
    <div className={styles.contentsWrapper}>
      <motion.div className={styles.descriptionContainer}
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeItem} >
          <motion.h4 className={styles.description}>{title}</motion.h4>
          <motion.p>{teacher}</motion.p>
        </motion.div>
      </motion.div>
      <motion.ul variants={container} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.2 }}>
        {list.map((item,index) => (
          <motion.li
            key={index}
            variants={fadeItem}
          >
            <i className="fa-solid fa-check"></i>
            <p className={styles.par}>{item}</p>
          </motion.li>
        ))}
      </motion.ul>
      <div className={styles.bottomStick} variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <motion.button className={styles.view} variants={fadeItem}>
         <motion.a
          href={link}
          target="_blank"
          >
          View Certificate <i className="fa-solid fa-arrow-right"></i>
        </motion.a>
        </motion.button>
      </div>
    </div>
  </div>
 )
}

export default CertificateContent
