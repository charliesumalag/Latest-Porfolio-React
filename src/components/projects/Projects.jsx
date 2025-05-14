import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import projectImg from '/img/project.png';
import projectWideImg from '/img/projectwide.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Stock Web Application',
      image: projectImg,
    },
    {
      id: 2,
      title: 'Todo Application',
      image: projectWideImg,
    },
    {
      id: 3,
      title: 'Stock Web Application',
      image: projectWideImg,
    },
    {
      id: 4,
      title: 'Stock Web Application',
      image: projectImg,
    },
  ];

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
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      className={styles.projectMainContainer}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className={styles.projectContents}>
        <motion.h2 variants={item}>Projects<span>.</span></motion.h2>
        <motion.ul className={styles.projectLists}>
          {projects.map((project) => (
            <motion.li
              key={project.id}
              className={styles.projectList}
              variants={item}
            >
              <img src={project.image} alt={project.title} />
              <div className={styles.projectText}>
                <h4>{project.title}</h4>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
