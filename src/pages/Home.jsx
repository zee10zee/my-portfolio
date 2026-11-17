import { Hero } from '../components/Hero.jsx'
import { About } from '../components/About.jsx'
import { Skills } from '../components/Skills.jsx'
import { Contributions } from '../components/Contributions.jsx'
import Contact from '../components/Contact.jsx'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Contributions />
      <Contact />
    </>
  )
}
