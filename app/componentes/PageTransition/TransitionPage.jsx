"use client"
import React from 'react'
import { motion } from 'framer-motion'
import styles from "./transition.module.css"

export const TransitionPage = () => {
  return (
    <>
        <motion.div 
            initial={{x: "-100%" , width: "100%"}}
            animate={{x: "0%" , width: "0%"}}
            transition={{duration: 0.8 , ease: "easeInOut"}}
            className={`${styles.page_transition} ${styles.bg_oraing}`} />
            
        <motion.div 
            initial={{x: "-100%" , width: "100%"}}
            animate={{x: "0%" , width: "0%"}}
            transition={{ delay: 0.3 ,duration: 0.8 , ease: "easeInOut"}}
            className={`${styles.page_transition} ${styles.bg_black}`} />
        
        <motion.div 
            initial={{x: "-100%" , width: "100%"}}
            animate={{x: "0%" , width: "0%"}}
            transition={{ delay: 0.4 , duration: 0.8 , ease: "easeInOut"}}
            className={`${styles.page_transition} ${styles.bg_bule}`} />
    </>
  )
}
