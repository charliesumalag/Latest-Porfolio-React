import React from 'react';
import styles from './Button.module.css';
import { Link } from 'react-scroll';

const Button = ({style, text}) => {
  return (
    <div className={styles.btnContainer}>
        <Link to='projects' smooth={true} duration={500}><button className={styles.myworks}>{text}</button></Link>
    </div>
  )
}

export default Button
