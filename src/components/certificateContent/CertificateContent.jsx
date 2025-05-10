import React from 'react'
import styles from './CertificateContent.module.css';
const CertificateContent = ({title, teacher, list, link}) => {
  return (
  <div className={styles.contentsContainer} data-aos="fade-up">
    <div className={styles.contentsWrapper}>
      <div className={styles.descriptionContainer}>
        <h4 className={styles.description}>{title}</h4>
        <p>{teacher}</p>
      </div>
      <ul>
        {list.map((item,index) => (
          <li>
            <i className="fa-solid fa-check"></i>
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <div className={styles.bottomStick}>
        <button className={styles.view}>
          <a href={link} target="_blank">View Certificate <i className="fa-solid fa-arrow-right"></i></a>
        </button>
      </div>
    </div>
  </div>
 )
}

export default CertificateContent
