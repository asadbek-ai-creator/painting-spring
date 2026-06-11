import { useEffect } from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Catalog from './components/Catalog'
import WhyUs from './components/WhyUs'
import Ticker from './components/Ticker'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in')
              io.unobserve(e.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
      )
      reveals.forEach((el) => io.observe(el))
      return () => io.disconnect()
    } else {
      reveals.forEach((el) => el.classList.add('in'))
    }
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Catalog />
      <WhyUs />
      <Ticker />
      <Partners />
      <Contact />
      <Footer />
    </>
  )
}

export default App
