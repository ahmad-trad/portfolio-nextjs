import { Projects } from "../componentes/Projects/projects"
import { Articies } from "../componentes/Articies/Articies"
import { TransitionPage } from '../componentes/PageTransition/TransitionPage'


export const metadata = {
  title: "Projects"
}

function about() {
  return (
    <>
        <TransitionPage />
        <Projects />
        <Articies />
    </>
  )
}

export default about