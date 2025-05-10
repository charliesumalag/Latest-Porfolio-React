import React from 'react'
import styles from "./Projects.module.css";
import projectImg from "/img/project.png";
import projectWideImg from "/img/projectwide.png";

const Projects = () => {
  return (
    <div className={styles.projectMainContainer}>
        <div className={styles.projectContents} data-aos="fade-up">
            <h2>Projects<span>.</span></h2>
            <ul className={styles.projectLists}>
                <li className={styles.projectList}>
                    <img src={projectImg} alt="" />
                    <div className={styles.projectText}>
                        <h4>Stock Web Application</h4>
                        <p>This web app lets users manage inventory with add, remove, and update functions. It uses HTML, CSS, Python, and PyScript.</p>
                    </div>
                </li>
                <li className={styles.projectList}>
                    <img src={projectWideImg} alt="" />
                    <div className={styles.projectText}>
                        <h4>Todo Application</h4>
                        <p>This To-Do app lets users add, delete, and check off tasks, underlining completed ones.s</p>
                    </div>
                </li>
                <li className={styles.projectList}>
                    <img src={projectWideImg} alt="" />
                    <div className={styles.projectText}>
                        <h4>Stock Web Application</h4>
                        <p>This web app lets users manage inventory with add, remove, and update functions. It uses HTML, CSS, Python, and PyScript.</p>
                    </div>
                </li>
                <li className={styles.projectList}>
                    <img src={projectImg} alt="" />
                    <div className={styles.projectText}>
                        <h4>Stock Web Application</h4>
                        <p>This web app lets users manage inventory with add, remove, and update functions. It uses HTML, CSS, Python, and PyScript.</p>
                    </div>
                </li>

            </ul>

        </div>
    </div>
  )
}

export default Projects
