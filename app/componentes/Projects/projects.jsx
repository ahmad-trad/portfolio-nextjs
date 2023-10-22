"use client"
import { projectsData } from "./projectsData"
import { Card } from "../shar_com/Card"
import styles from "./projects.module.css"
import { Suspense } from "react"
import { CanvasLoader } from "../shar_com/Loader"


export const Projects = () => {
  return (
    <div className={styles.projects}>
        <h2 className={styles.pro_heading}>projects</h2>
        <div className={styles.flex}>
          <Suspense fallback={<CanvasLoader />}>

            {
              projectsData.map((card) => (
                <Card delay={card.id} key={card.id} comp={"pro"} img={card.img} title={card.title} link={card.link} />
                ))
              }
          </Suspense>
        </div>
    </div>
  )
}
