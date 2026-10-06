import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { About, Contact, Experience, Projects, Publications, Skills } from './components/Sections'
import { useScrollReveal } from './hooks'

function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
