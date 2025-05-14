import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from "./Nav.module.css";
import logo from "/img/logo.png";

const Nav = () => {

    const [isToggleMobileMenu, setIsToggleMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setIsToggleMobileMenu((prev) => !prev)
        console.log(isToggleMobileMenu)
    }

    // useEffect(() => {
    //     if (isToggleMobileMenu) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = '';
    //     }
    // }, [isToggleMobileMenu]);

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
               <ul className={`${styles.navLinks} ${isToggleMobileMenu ? styles.active : ''}`}>
                    {isToggleMobileMenu && <div onClick={toggleMobileMenu} className={styles.close}>
                        <i class="fa-solid fa-xmark" ></i>
                    </div>}
                    <li className={styles.navLink}><Link to='hero' smooth={true} duration={500} onClick={toggleMobileMenu}>Home</Link></li>
                    <li className={styles.navLink}><Link to='projects' smooth={true} duration={500} onClick={toggleMobileMenu}>Projects</Link></li>
                    <li className={styles.navLink}><Link to='certificates' smooth={true} duration={500} onClick={toggleMobileMenu}>Certificates</Link></li>
                    <li className={styles.navLink}><Link to='about' smooth={true} duration={500} onClick={toggleMobileMenu}>About</Link></li>
                    <li className={styles.navLink}><Link to='contact' smooth={true} duration={500} onClick={toggleMobileMenu}>Contact</Link></li>

                </ul>

            </nav>
            <ul className={styles.onlinePlatform}>
                <li className={styles.platform}><i className="fa-brands fa-square-github"></i></li>
                <li className={styles.platform}><i className="fa-brands fa-linkedin"></i></li>
                <li className={styles.platform}><i className="fa-brands fa-square-instagram"></i></li>
            </ul>
            <div className={styles.hamburger} onClick={toggleMobileMenu}>
                    <i class="fa-solid fa-bars"></i>
            </div>

        </div>

    </div>
  )
}

export default Nav
