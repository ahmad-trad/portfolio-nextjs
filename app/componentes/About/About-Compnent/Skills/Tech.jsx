"use client"
import { BallCanvas } from "@/app/componentes/Canvas/Ball";
import { technologies } from "./skillsData";
import styles from "./Skills.module.css"

export const Tech = () => {
  return (
    <div className={styles.tech}>
      <div className={styles.tech_card}>
        {technologies.map((technology) => (
          <div className={styles.tech_item} key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};


