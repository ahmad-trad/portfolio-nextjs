"use client"
import Image from "next/image"
import { useEffect , useState } from 'react'
import styles from "./Arrowup.module.css"

export const ArrowUp = () => {

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
    <>
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
    </>
  )
}
