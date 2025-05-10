import React from 'react';
import { Link } from 'react-scroll';
import styles from "./Nav.module.css";
import logo from "/img/logo.png";

const Nav = () => {
  return (
    <div className={styles.navContainer}>
        <div className={styles.nav}>
            <div className={styles.logo} >
                <div className={styles.imgContainer}>
                    <img src={logo} alt="" />
                </div>
                <h2 className={styles.logoText}>Charlie</h2>
            </div>
            <nav>
                <ul className={styles.navLinks}>
                    <li className={styles.navLink}><Link to='hero' smooth={true} duration={500}>Home</Link></li>
                    <li className={styles.navLink}><Link to='projects' smooth={true} duration={500}>Projects</Link></li>
                    <li className={styles.navLink}><Link to='certificates' smooth={true} duration={500}>Certificates</Link></li>
                    <li className={styles.navLink}><Link to='about' smooth={true} duration={500}>About</Link></li>
                    <li className={styles.navLink}><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </nav>
            <ul className={styles.onlinePlatform}>
                <li className={styles.platform}><i className="fa-brands fa-square-github"></i></li>
                <li className={styles.platform}><i className="fa-brands fa-linkedin"></i></li>
                <li className={styles.platform}><i className="fa-brands fa-square-instagram"></i></li>
            </ul>
        </div>

    </div>
  )
}

export default Nav
