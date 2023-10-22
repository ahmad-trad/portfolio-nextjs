"use client"
import styles from './page.module.css'

import { About } from "./componentes/About/About"
import { Articies } from './componentes/Articies/Articies'
import { Contact } from './componentes/Contact/Contact'
import { Hero } from "./componentes/Hero/HeroPro"
import { Projects } from './componentes/Projects/projects'
import { TransitionPage } from './componentes/PageTransition/TransitionPage'
import Image from "next/image"
import { useEffect , useState } from 'react'

export default function Home() {

  const [arrow, setArrow] = useState(false);

  useEffect(() =>{
    window.addEventListener("scroll", () =>{
      if(window.scrollY >= "1000"){
        setArrow(true);
      }else{
        setArrow(false);
      }
    })
  }, [])

  const handleScrollUp = () =>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className={styles.container}>
      <TransitionPage />
      <Hero />
      <About />
      <Projects />
      <Articies />
      <Contact />
      <span onClick={handleScrollUp} className={`${styles.scroll_up} ${arrow ? styles.show_arrow : ""}`} >
      <Image 
          // style={{ width: '100%', height: 'auto' }}
          width={55}
          height={55} 
          priority={true} 
          src={"/arrow_up.png"} 
          alt={`image-arrow-up`}
          className={styles.arrow_up}
          />    
      </span>
    </div>
  )
}
