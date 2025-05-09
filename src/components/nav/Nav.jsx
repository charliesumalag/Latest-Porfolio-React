import React from 'react';
import styles from "./Nav.module.css";
import logo from "/img/logo.png";

const Nav = () => {
  return (
    <div className={styles.navContainer}>
        <div className={styles.nav}>
            <div className={styles.logo}>
                <div className={styles.imgContainer}>
                    <img src={logo} alt="" />
                </div>
                <h2 className={styles.logoText}>Charlie</h2>
            </div>
            <nav>
                <ul className={styles.navLinks}>
                    <li className={styles.navLink}><a href="">Home</a></li>
                    <li className={styles.navLink}><a href="">Projects</a></li>
                    <li className={styles.navLink}><a href="">Certificates</a></li>
                    <li className={styles.navLink}><a href="">About</a></li>
                    <li className={styles.navLink}><a href="">Contact</a></li>
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
