"use client"
import { motion } from "framer-motion"
import { skillsData } from "./skillsData"
import styles from "./Skills.module.css"

export const Skill = ({name, x , y}) => {
    return <motion.div
        key={name}
        whileHover = {{scale: 1.08}}
        initial = {{x:0 , y:0 }}
        whileInView={{x: x, y: y}}
        transition={{duration: 5}}
        viewport={{once: true}}
        className={styles.item_skills}
    >
        {name}
    </motion.div>
}

export const Skills = () => {
  return (
    <div className={styles.skills}>
        <h2 className={styles.heading_skills}>Skills</h2>
        <div className={styles.card_skills}>
            {
                skillsData.map((item) => (
                    <Skill key={item.name} name={item.name} x={item.x} y={item.y} />
                ))
            }
        </div>
    </div>
  )
}
