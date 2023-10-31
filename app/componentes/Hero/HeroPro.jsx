"use client"
import React from 'react'
import { heroData } from './hero'
import Image from 'next/image'
import myImg from "@/public/img-portfoilo/my-img/IMG-20230917-WA0000.jpg"
import styles from "./Hero.module.css";
import Link from 'next/link';
import LinkArrow from '../Svg/linkArrow'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <div className={styles.section}>
        <motion.div 
          initial={{x: -200}}
          animate={{x: 0}}
          transition={{duration: 1.5}}
          className={styles.section__title}
        >
          <h2 className={styles.name}>{heroData.name}</h2>
          
          <div className={styles.jobs}>
            <h3>{heroData.jobs}</h3>
            <h3>{heroData.jobs}</h3>
          </div>

          <h4 className={styles.description}>{heroData.title}</h4>

          <p className={styles.description__more}>{heroData.subtitle}</p>

          <Link href={"/Ahmed_Trad_CV.pdf"} target='_blank' className={styles.pdf}>
            resume
            <LinkArrow />
          </Link>
        </motion.div>

        <motion.div 
          className={styles.section__image}
          initial={{x: 200}}
          animate={{x: 0}}
          transition={{duration: 1}}
          >
          <div className={styles.image}>
            <Image 
              placeholder="blur"
              priority={true} 
              src={myImg} 
              alt="profile" />
            <div className={styles.bg_one}></div>
            <div className={styles.bg_two}></div>
          </div>
        </motion.div>
    </div>
  )
}

