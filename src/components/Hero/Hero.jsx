import React from 'react';
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hallo, I'm Paul!</h1>
        <p className={styles.description}>
          I am a recent engineering graduate from the University of the Philippines.
        </p>
        <a href="mailto:pusim1@alum.up.edu.ph" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img 
        src={getImageUrl("hero/heroUPgrad.png")}
        alt = "Pic of me" 
        className={styles.heroImg}
      />
    </section>
  );
};
