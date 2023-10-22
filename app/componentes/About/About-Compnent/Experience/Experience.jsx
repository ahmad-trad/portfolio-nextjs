"use client"
import { useRef } from "react"
import { useScroll, motion } from "framer-motion"
import { experienceData } from "./experienceData"
import styles from "./Experience.module.css"

export const Datailse = ({ position, company, time, address, work , duration}) =>{

    const refLi = useRef();
    const {scrollYProgress} = useScroll({
        target: refLi,
        offset: ["center end", "center center"]
    })

    return <motion.li 
                initial={{y: 100}}
                whileInView={{y: 0}}
                transition={{duration: 0.5 , delay: 0.01 * duration}} 
                viewport={{ once: true }}
                ref={refLi} 
                className={styles.li_exp}
            >
        <figure className={styles.figure_exp}>
            <svg width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" className={styles.circle_one}/>
                <motion.circle
                 style={{
                    pathLength: scrollYProgress
                 }}
                 cx="75" cy="50" r="20" className={styles.circle_two}/>
                <circle cx="75" cy="50" r="10" className={styles.circle_three}/>
            </svg>
        </figure>

        <div>
            <h3 className={styles.position}> <span>{position}</span>&nbsp; {company}</h3>
            <span className={styles.time}>{time} | {address}</span>
            <p className={styles.work}>{work}</p>
        </div>
    </motion.li>
}

export const Experience = () => {

    

  return (
    <div className={styles.experience}>
        <h2 className={styles.heading_exp}>experience</h2>

        <div className={styles.datails_exp} >
            <ul className={styles.ul_exp}>
                {
                    experienceData.map((item) => (
                        <Datailse duration={item.id} key={item.id} position={item.position} company={item.company} time={item.time} address={item.address} work={item.work} />
                    ))
                }
            </ul>
        </div>
    </div>
  )
}
