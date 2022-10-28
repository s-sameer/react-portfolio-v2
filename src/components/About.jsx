import {motion} from "framer-motion"

function About() {
  return (
    <div className="h-screen flex flex-col relative text-center
    max-w-3xl px-10 justify-center items-center mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] pl-8">About</h3>
      <motion.h4 
        initial={{ opacity: 0, y:300 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{duration: 1.5}}
        className="text-lg">
        Hellooo! My name is Sameer and I am a <span className="underline">Software developer</span>, capable of working with both the front-end and back-end of applications.
        I create user-friendly, performant web applications that scale.
        I also do <span className="underline">UI/UX design</span> and <span className="underline">Game development</span> on the side. Currently pursuing my
        Bachelor of Computer Engineering degree at Memorial University and 
        teaching myself <span className="underline">Machine learning</span> concepts and algorithms. My mission in life is to create
        artificially intellegent web applications. Feel free to download my resume to get a detailed overview of my skills and relevant experiences.
      </motion.h4>
      <motion.div 
        initial={{ opacity: 0, y:150 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{duration: 1.5}}
        className="relative top-20">
        <div className="absolute inset-0 bg-pink-600 blur rounded-lg"></div>
        <button 
        className="relative bg-[#12010f] text-[#d2d1d1] hover:text-white px-5 py-2 rounded-full"><a href="https://drive.google.com/uc?export=download&id=16d1L187ZgMzFEe3TwRPcAPmBwRlh-s6R">Resume</a>
        </button>
      </motion.div>
    </div>
  )
}

export default About