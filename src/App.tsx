import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Learning } from './sections/Learning'
import { Projects } from './sections/Projects'
import { Services } from './sections/Services'
import { Skills } from './sections/Skills'

export default function App() {
  return (
    <div className="min-h-svh">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Learning />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
