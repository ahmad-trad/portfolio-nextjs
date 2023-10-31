import { Contact } from "../componentes/Contact/Contact"
import { TransitionPage } from '../componentes/PageTransition/TransitionPage'

export const metadata = {
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