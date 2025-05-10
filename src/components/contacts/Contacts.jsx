import React from 'react'
import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={styles.contactWrapper}>
        <div className={styles.contactsContainer}  data-aos="fade-up">
             <h2 data-aos="fade-up">Get in Touch<span>.</span></h2>
             <div className={styles.contactsContents}>
                <div className={styles.left}  data-aos="fade-up">
                    <div className={styles.leftContents}>
                        <i class="fa-solid fa-location-dot"></i>
                        <div className={styles.leftText}>
                            <p className={styles.headText}>Location</p>
                            <p className={styles.subText}>Manila, Philippines</p>
                        </div>
                    </div>
                    <div className={styles.leftContents}>
                        <i class="fa-solid fa-phone"></i>
                        <div className={styles.leftText}>
                            <p className={styles.headText}>Phone</p>
                            <p className={styles.subText}>+63-929-574-9771</p>
                        </div>
                    </div>
                    <div className={styles.leftContents}>
                        <i class="fa-solid fa-envelope"></i>
                        <div className={styles.leftText}>
                            <p className={styles.headText}>Email</p>
                            <p className={styles.subText}>charliesumalag1991@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className={styles.right}  data-aos="fade-up">
                    <div className={styles.rightInputs}>
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Phone' />
                        <input type="text" placeholder='Subject' />
                        <textarea name="" id="" placeholder='Start writing message here'></textarea>
                    </div>
                    <div>
                        <button className={styles.myworks}>SUBMIT</button>
                    </div>
                </div>
            </div>
            <div className={styles.mapContainer} data-aos="fade-up">
                <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=San%20Mateo+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/personal-trackers/">Personl trackers</a></iframe>
            </div>
        </div>
    </div>
  )
}

export default Contacts
