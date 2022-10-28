import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { motion } from 'framer-motion'

function Hero() {
    const [text, count] = useTypewriter({
        words: ["Hi, I'm Sameer","Passionate Full Stack Developer", "ML Enthusiast", "Hobbyist Game Developer"],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center'>
        <BackgroundCircles/>
        <motion.img 
        animate={{scale: [1,0.8,1.5,0.8,1]}}
        transition={{duration: 1.5}}
        src="https://react-portfolio-v1-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdev-ed-wave.fdec7979.png&w=1080&q=75" 
        alt="image" 
        className='relative h-32 w-32 rounded-full object-cover bg-[#2f2d2d]'/>
        <div className='z-20'>
            <h2 className='text-sm uppercase pb-2 tracking-[9px]'>Software Developer</h2>
            <h1 className='text-3xl text-white'>
                <span >{text}</span>
                <Cursor cursorColor='#e01ceb'/>
            </h1>
            <div className='pt-5'>
                <a href="#about">
                    <button className='heroButton'>About</button>
                </a>
                <a href="#skills">
                    <button className='heroButton'>Skills</button>
                </a>
                <a href="#projects">
                    <button className='heroButton'>Projects</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero