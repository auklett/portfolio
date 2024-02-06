import React from 'react'
import styles from "./SkillCard.module.css";
import { getImageUrl } from '../../utils';


export const SkillCard = ({
    skill: { title, imageSrc }
}) => {
  return (
    <div className={styles.container}>
        <img 
            src={getImageUrl(imageSrc)} 
            alt={`${title}`} 
            className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
    </div>
  );
};
