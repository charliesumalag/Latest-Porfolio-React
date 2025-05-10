import React, {useState} from 'react'
import styles from './Certificates.module.css';
import CertificateContent from '../certificateContent/CertificateContent';


const Certificates = () => {
    // Static list of certificates titles (li items)
    const certificatesLinks = [
      { id: 1, title: 'Web Design' },
      { id: 2, title: 'HTML & CSS' },
      { id: 3, title: 'PHP' },
      { id: 4, title: 'Laravel' },
      { id: 5, title: 'React & Next Js' },
    ];

  const certificatesData = [
    {
      id: 2,
      title: 'Build Responsive Real-World Websites with HTML and CSS',
      teacher: 'Jonas Schmedtmann (July 7, 2023)',
      list:  [`Built a Complete, Fully Responsive, Real-World Website from Scratch Using Modern Web Standards`, `Mastered Modern, Semantic HTML5 and Advanced, Responsive CSS3 Techniques for Efficient Web Development`, `Applied a Real, Practical Web Design Framework for Creating Visually Consistent and User-Friendly Websites`, `Strengthened Core Developer Skills in Debugging, Documentation, and Professional Development Tools`],
      link: 'https://www.udemy.com/certificate/UC-c09808c5-73d6-47d9-8f27-e42749cc655e'
    },
    {
      id: 5,
      title: 'Master modern React from beginner to advanced! Next.js, Context API, React Query, Redux, Tailwind, advanced patterns',
      teacher: 'Jonas Schmedtmann (July 7, 2023)',
      list: [
        `Mastered React fundamentals, including components, JSX, props, events, state, and useEffect hooks`,
        `Learned advanced state management with Redux, Redux Toolkit, Thunks, and React Query`,
        `Built full-stack apps with Supabase for backend and API integration`,
        `Optimized React apps for performance with memoization techniques (useMemo, useCallback), Suspense, and code splitting`
      ]
    },
    {
      id: 3,
      title: 'Learn PHP fundamentals then build a job listing website from the ground up, using a Laravel-like infrastructure',
      teacher: 'Brad Traversy (July 7, 2023)',
      list: [
        `Mastered PHP fundamentals including data types, control structures, functions, OOP, and superglobals`,
        `Built a complete job listing website from scratch using vanilla PHP without any frameworks`,
        `Implemented custom Laravel-like routing, CRUD operations, and authentication with session-based middleware`,
        `Secured application using prepared statements, input validation, and PSR-4 autoloading standards`
      ]
    },
    {
      id: 4,
      title: 'Master Laravel and PHP: Build 5 Real-World Projects! Learn PHP From Scratch',
      teacher: 'Piotr Jura (July 7, 2023)',
      list: [
        `Developed five real-world Laravel applications using MVC architecture, Eloquent ORM, and Blade templating`,
        `Built RESTful APIs with Laravel Sanctum, including authentication, authorization, and JSON response formatting`,
        `Implemented advanced features like task scheduling, queues, event handling, and Livewire components for dynamic UIs`,
        `Integrated Tailwind CSS and Alpine.js for modern front-end design and optimized performance using caching and middleware`
      ]
    },
    {
      id: 1,
      title: 'Learn to design websites with Figma, build with Webflow, and make a living freelancing',
      teacher: 'Vako Shvili (July 7, 2023)',
      list: [
        `Mastered modern web design principles such as layout, typography, and visual hierarchy using Figma`,
        `Designed and prototyped full websites with Figma, focusing on real-world UX/UI best practices`,
        `Built professional, responsive websites using Webflow—without writing code`,
        `Developed a freelance-ready portfolio and learned proven strategies for landing high-paying web design clients`
      ]
    },

  ];

  const [activeIndex, setActiveIndex] = useState(0);


  const [selectedCertificate, setSelectedCertificate] = useState(certificatesData.at(4))

  const handleCertificateClick = (id, index) => {

    const certificate = certificatesData.find((cert) => cert.id === id);
    setSelectedCertificate(certificate);
    setActiveIndex(index);
  };

  return (
  <div className={styles.certificatesMainContainer}>
    <div className={styles.certificateContents}  data-aos="fade-up">
      <h2 data-aos="fade-up">My Certificates<span>.</span></h2>
      <div className={styles.certificates}>
        <div className={styles.lineContainer} data-aos="fade-up">
          <div className={styles.vline}></div>
          <div className={styles.indicator} style={{ top: `${activeIndex * 72}px` }}></div>
        </div>
        <ul className={styles.titlesContainer} data-aos="fade-up">
          {certificatesLinks.map((certificate, index) => (
            <li onClick={() => handleCertificateClick(certificate.id, index)}  className={index === activeIndex ?styles.active : ''}>{certificate.title}</li>
          ))}
        </ul>
        {selectedCertificate && (
          <CertificateContent
          title={selectedCertificate.title}
          teacher={selectedCertificate.teacher}
          list={selectedCertificate.list}
          link={selectedCertificate.link}/>
        )}
      </div>
    </div>
  </div>
  )
}

export default Certificates
