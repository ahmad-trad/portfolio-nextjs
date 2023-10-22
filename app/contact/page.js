import { Contact } from "../componentes/Contact/Contact"
import { TransitionPage } from '../componentes/PageTransition/TransitionPage'

export const matedata = {
  title: "Contact"
}

function about() {
  return (
    <>
        <TransitionPage />
        <Contact />
    </>
  )
}

export default about