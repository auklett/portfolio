import React from 'react';
import styles from "./ProjectCard.module.css";
import { getImageUrl } from '../../utils';

export const ProjectCard = ({ 
    project: { title, imageSrc, description, demo }
}) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <img 
                src={getImageUrl(imageSrc)} 
                alt={`${title}`} 
                className={styles.image}
            />
            <p className={styles.description}>{description}</p>
            <div className={styles.links}>
                <a href={demo} className={styles.link}>More Info</a>
            </div>
        </div>
    );
};
