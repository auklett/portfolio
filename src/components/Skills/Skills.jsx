import React from 'react';
import styles from "./Skills.module.css";
import skills_data from "../../data/skills-data.json";
import skills_webdev from "../../data/skills-webdev.json";
import skills_engg from "../../data/skills-engineering.json";
import skills_others from "../../data/skills-others.json";
import { getImageUrl } from '../../utils';
import { SkillCard } from './SkillCard';

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
        <h2 className={styles.title}>Skills</h2>

        <div className={styles.card}>
          <p className={styles.skillname}>Data</p>
          <div className={styles.skills}>
            {skills_data.map((skill, id) => {
              return <SkillCard  key ={id} skill={skill} />;
          })}
          </div>
        </div>
        
        <div className={styles.card}>
          <p className={styles.skillname}>Website Development</p>
          <div className={styles.skills}>
            {skills_webdev.map((skill, id) => {
              return <SkillCard  key ={id} skill={skill} />;
          })}
          </div>
        </div>
        
        <div className={styles.card}>
          <p className={styles.skillname}>Engineering</p>
          <div className={styles.skills}>
            {skills_engg.map((skill, id) => {
              return <SkillCard  key ={id} skill={skill} />;
          })}
          </div>
        </div>
        
        <div className={styles.card}>
          <p className={styles.skillname}>Others</p>
          <div className={styles.skills}>
            {skills_others.map((skill, id) => {
              return <SkillCard  key ={id} skill={skill} />;
          })}
          </div>
        </div>
    </section>
  );
};
