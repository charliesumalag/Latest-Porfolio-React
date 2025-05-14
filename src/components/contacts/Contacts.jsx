import React from 'react';
import styles from './Contacts.module.css';
import { motion } from 'framer-motion';

const Contacts = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <motion.div
      className={styles.contactWrapper}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className={styles.contactsContainer}>
        <motion.h2 variants={item}>
          Get in Touch<span>.</span>
        </motion.h2>

        <motion.div className={styles.contactsContents}>
          <motion.div className={styles.left} >
            <motion.div className={styles.leftContents} variants={item}>
              <i className="fa-solid fa-location-dot"></i>
              <div className={styles.leftText}>
                <p className={styles.headText}>Location</p>
                <p className={styles.subText}>Manila, Philippines</p>
              </div>
            </motion.div>
            <motion.div className={styles.leftContents} variants={item}>
              <i className="fa-solid fa-phone"></i>
              <div className={styles.leftText}>
                <p className={styles.headText}>Phone</p>
                <p className={styles.subText}>+63-929-574-9771</p>
              </div>
            </motion.div>
            <motion.div className={styles.leftContents} variants={item}>
              <i className="fa-solid fa-envelope"></i>
              <div className={styles.leftText}>
                <p className={styles.headText}>Email</p>
                <p className={styles.subText}>charliesumalag1991@gmail.com</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div className={styles.right} variants={item}>
            <div className={styles.rightInputs}>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Start writing message here"></textarea>
            </div>
            <motion.div variants={item}>
              <button className={styles.myworks}>Submit</button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className={styles.mapContainer} variants={item}>
          <iframe
            width="100%"
            height="300"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=San%20Mateo+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contacts;
