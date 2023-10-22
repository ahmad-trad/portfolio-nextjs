import { Navbar } from './componentes/Navbar/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { Footer } from './componentes/Footer/Footer'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"],
  preload: true,
})

export const metadata = {
  title: 'Portfolio',
  description: 'Personal website of developer Ahmed Trad',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {/* <TransitionPage /> */}
          <main>
            <Navbar />
            {children}
            <Footer />
          </main>
          <div className='background' />
          <div className='background_two' />
      </body>
    </html>
  )
}
