"use client"
import { Suspense  } from "react"
import { articiesData } from "./articiesData"
import { Card } from "../shar_com/Card"
import styles from "./Articies.module.css"
import { CanvasLoader } from "../shar_com/Loader"  


export const Articies = () => {
  return (
    <div className={styles.articies}>
        <h2 className={styles.art_heading}>Web Applications</h2>
        <div className={styles.art_flex}>
          <Suspense fallback={<CanvasLoader />}>
            {
                articiesData.map((card) => (
                    <Card key={card.id} comp={"art"} img={card.img} title={card.title} link={card.link} />
                ))
            }
          </Suspense>
        </div>
    </div>
  )
}
