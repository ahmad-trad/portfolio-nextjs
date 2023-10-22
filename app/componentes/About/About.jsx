"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { aboutData } from "./aboutData"
import profile from "@/public/img-portfoilo/my-img/IMG-20230917-WA0000.jpg"
import styles from "./About.module.css"
import { Experience } from "./About-Compnent/Experience/Experience"
import { Education } from "./About-Compnent/Education/Education"
import { Tech } from "./About-Compnent/Skills/Tech"

export const About = () => {
  return (
    <div>
        <h2 className={styles.about_heading}>about</h2>
        <div className={styles.about}>
            <motion.div 
                className={styles.description__about}
                initial={{x: -200}}
                whileInView={{x: 0}}
                transition={{duration: 0.5}}    
                viewport={{ once: true }}
            >
                <h1>{aboutData.title}</h1>
                <p>{aboutData.pargrphOne}</p><br />
                <p>{aboutData.pargrphTwo}</p><br />
                <p>{aboutData.pargrphThree}</p>
            </motion.div>

            <motion.div 
                className={styles.image}
                initial={{y: 200}}
                whileInView={{y: 0}}
                transition={{duration: 0.5}}
                viewport={{ once: true }}
            >
                <div className={styles.card__image}>
                    <div className={styles.min__about_img}>
                        <Image 
                            placeholder="blur"
                            priority={true} 
                            src={profile} 
                            alt="image-profile"/>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{x: 200}}
                whileInView={{x: 0}}
                transition={{duration: 0.5}}
                viewport={{ once: true }}
                className={styles.experience}
            >
                <div className={styles.flex__col}>
                    <span>{aboutData.experience_num}</span>
                    <span>{aboutData.experience}</span>
                </div>

                <div className={styles.flex__col}>
                    <span>{aboutData.project_num}</span>
                    <span>{aboutData.project}</span>
                </div>

                <div className={styles.flex__col}>
                    <span>{aboutData.client_num}</span>
                    <span>{aboutData.client}</span>
                </div>
            </motion.div>
        </div>

        
        <Tech />
        <Experience />
        <Education />
    </div>
  )
}
