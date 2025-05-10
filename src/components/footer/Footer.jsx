import React from 'react'
import { Link } from 'react-scroll';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
        <div className={styles.footerContainer}  data-aos="fade-up">
            <h2>Curious About What I Do<span>?</span></h2>
            <div className={styles.footerContents}>
                <div className={styles.btnContainer}>
                    <Link to='projects' smooth={true} duration={500}><button className={styles.myworks}>My Works</button></Link>
                    <button className={styles.resume} >RESUME</button>
                </div>
                <div className={styles.allrightsContainer}>
                    <p>&copy;2025 Charlie Sumalag</p>
                    <p>All Rights Reserved.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer
