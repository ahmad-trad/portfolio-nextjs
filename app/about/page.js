import { About } from '../componentes/About/About'
import { TransitionPage } from '../componentes/PageTransition/TransitionPage'

export const matedata = {
  title: "About"
}

function about() {
  return (
    <>
        <TransitionPage />
        <About />
    </>
  )
}

export default about