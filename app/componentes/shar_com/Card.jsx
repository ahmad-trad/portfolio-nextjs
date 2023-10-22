"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import styles from "./Card.module.css"

export const Card = ({comp, img, title, link, delay}) => {
  return (
      <motion.div  
        initial={{x: -200}}
        whileInView={{x: 0}}
        transition={{duration: 0.5, delay: 0.01 * delay}}
        viewport={{ once: true }}
        className={styles.Card}
      >
          <div className={styles.card_items}>

              <div className={comp === "pro" ? styles.image_pro : styles.image}>
                  <Image 
                  placeholder="blur"
                  style={{ width: '100%', height: 'auto' }} 
                  priority={true} 
                  src={img} 
                  alt={`image-${title}`} />    
              </div>

              <h3 className={styles.title}>{title}</h3>

              <a href={link} target="_blank" alt={`img-${title}`} className={styles.button}>visit</a>
          </div>
      </motion.div>
    
  )
}
