import React from 'react';
import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div>
            <h2>Contact Me</h2>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <a href="tel:+639062421152">
                    <img className={styles.img} src= {getImageUrl("contact/accept-call-icon.png")} alt="Cellphone Icon"/>
                </a>
                <a href="tel:+639062421152">
                    +63 (906) 242 1152
                </a>
            </li>

            <li className={styles.link}>
                <a href="mailto:pusim1@alum.up.edu.ph">
                    <img className={styles.img} src= {getImageUrl("contact/address-book-color-icon.png")} alt="Email Icon"/>
                </a>
                <a href="mailto:pusim1@alum.up.edu.ph">
                    pusim1@alum.up.edu.ph
                </a>
            </li>

            <li className={styles.link}>  
                <a href="https://www.linkedin.com/in/paul-elvin-sim/">
                    <img className={styles.img} src= {getImageUrl("contact/linkedin-app-icon.png")} alt="LinkedIn Icon"/>
                </a>
                <a href="https://www.linkedin.com/in/paul-elvin-sim/">
                    linkedin.com/in/paul-elvin-sim
                </a>
            </li>

            <li className={styles.link}>
                <a href="https://github.com/auklett">
                    <img className={styles.img} src= {getImageUrl("contact/github-icon.png")} alt="Github Icon"/> 
                </a>
                <a href="https://github.com/auklett">
                    github.com/auklett
                </a>
            </li>

        </ul>
    </footer>);
};
