import React from 'react'
import styles from './About.module.css';
import profile from "/img/profile.png";
import box from "/img/box.png";
import circles from "/img/circles.png";
import whiteArrow from "/img/whitearrow.png";

const About = () => {
  return (
    <div  className={styles.aboutMainContainer}>
        <div className={styles.aboutContents} data-aos="fade-up">
            <h2 data-aos="fade-up">My Story<span>.</span></h2>
            <div className={styles.contensContainer}>
                <div className={styles.left}  data-aos="fade-up">
                    <p>I'm Charlie Sumalag, a Bachelor of Science in Information Technology (BSIT) graduate with a strong passion for web development. I’ve built a solid foundation in both front-end and back-end technologies, including HTML, CSS, Tailwind, JavaScript, React, PHP, and Laravel. While pursuing my degree, I also took the initiative to enhance my skills through online courses on Udemy, deepening my understanding of web technologies beyond the classroom.<br></br><br></br>

                    Through academic projects and collaborative work, I’ve developed practical experience in programming, web design, and problem-solving. I’m particularly drawn to full-stack development and am eager to contribute to real-world projects where I can apply my knowledge to build innovative and meaningful solutions in the tech industry
                    </p>
                </div>
                <div className={styles.right}  data-aos="fade-up">
                    <img className={styles.profile} src={profile} alt="" />
                    <img className={styles.box} src={box} alt="" />
                    <img className={styles.whiteArrow} src={whiteArrow} alt="" />
                    <img className={styles.circles} src={circles} alt="" />
                </div>
            </div>

        </div>

    </div>
  )
}

export default About
