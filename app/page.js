import styles from './page.module.css'

import { About } from "./componentes/About/About"
import { Articies } from './componentes/Articies/Articies'
import { Contact } from './componentes/Contact/Contact'
import { Hero } from "./componentes/Hero/HeroPro"
import { Projects } from './componentes/Projects/projects'
import { TransitionPage } from './componentes/PageTransition/TransitionPage'
import { ArrowUp } from './componentes/arrwoUp/ArrowUp'


export default function Home() {

  return (
    <div className={styles.container}>
      <TransitionPage />
      <Hero />
      <About />
      <Projects />
      <Articies />
      <Contact />
      <ArrowUp />
    </div>
  )
}
