"use client"
import { useRef } from "react"
import { useScroll, motion } from "framer-motion"
import { educationData } from "./educationData"
import styles from "./Education.module.css"

export const Datails = ({duration ,  position, company, time, address, work}) =>{

    const refLi = useRef();
    const {scrollYProgress} = useScroll({
        target: refLi,
        offset: ["center end", "center center"]
    })

    return <motion.li  
                ref={refLi} 
                className={styles.li_exp_io}
                initial={{y: 100}}
                whileInView={{y: 0}}
                viewport={{ once: true }}
                transition={{duration: 0.5 , delay: 0.01 * duration}} 
            >
        <figure className={styles.figure_exp_io}>
            <svg width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" className={styles.circle_one_io}/>
                <motion.circle
                 style={{
                    pathLength: scrollYProgress
                 }}
                 cx="75" cy="50" r="20" className={styles.circle_two_io}/>
                <circle cx="75" cy="50" r="10" className={styles.circle_three_io}/>
            </svg>
        </figure>
         
        <div>
            <h3 className={styles.position_io}> <span>{position}</span>&nbsp; {company}</h3>
            <span className={styles.time_io}>{time} | {address}</span>
            <p className={styles.work_io}>{work}</p>
        </div>
    </motion.li>
}

export const Education = () => {


  return (
    <div className={styles.experience_io}>
        <h2 className={styles.heading_exp_io}>education</h2>

        <div className={styles.datails_exp_io} >
            <ul className={styles.ul_exp_io}>
                {
                    educationData.map((item) => (
                        <Datails duration={item.id} key={item.id} position={item.position} company={item.company} time={item.time} address={item.address} work={item.work} />
                    ))
                }
            </ul>
        </div>
    </div>
  )
}
