import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='bg-[#1f1e1d] text-[#afafaf] h-screen overflow-x-hidden scrollbar-hide z-0 snap-y snap-mandatory'>
      <Header/>
      
      <section id='hero' className='md:snap-start'>
        <Hero/>
      </section>

      <section id='about' className='md:snap-center'>
        <About/>
      </section>

      <section id='skills' className='md:snap-center'>
        <Skills/>
      </section>
      
      <section id="projects" className='md:snap-center'>
        <Projects/>
      </section>

      <section id="contact" className='md:snap-start'>
        <Contact/>
      </section>
    </div>
  )
}


export default App