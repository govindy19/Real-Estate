// app/page.tsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Properties from './components/Properties'
import About from './components/About'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Aboutknown from './components/Aboutknown'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="">
        <Hero />
        <About />
        <Aboutknown/>
        <Properties />
        
        <Services/>
        <Testimonials />
        <Contact />
        <Footer/>
        
      </main>
    </>
  )
}
