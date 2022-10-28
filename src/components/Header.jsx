import {SocialIcon} from "react-social-icons"
import {motion} from "framer-motion"

// This is a component -> bc it's a func that returns some HTML(JSX)
export default function Header() {
  return (
    <header className="sticky top-0 flex justify-between items-start max-w-7xl mx-auto z-20 p-5">
        <motion.div initial={{
            x: -500,
            opacity: 0,
            scale: 0.3
        }} 
        animate={{
            x: 0, //Returning to its default x-position
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5,
        }}
        className="flex items-center">
            {/* Social icons */}
            <SocialIcon url="https://www.linkedin.com/in/-sameer/" fgColor="white" bgColor="transparent"/>
            <SocialIcon url="https://github.com/s-sameer/" fgColor="white" bgColor="transparent"/>
            <SocialIcon url="https://wa.me/+17097301240" network="whatsapp" fgColor="white" bgColor="transparent"/>
        </motion.div>
        <a href="#contact">
        <motion.div initial={{
            x: 500,
            opacity: 0,
            scale: 0.3
            }}
            animate={{
                x: 0, //Returning to its default x-position
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}             
            className="flex items-center text-white cursor-pointer">
                <SocialIcon className="cursor-pointer" network="email" fgColor="white" bgColor="transparent"/>
                <p className="uppercase hidden md:inline-flex text-sm" >Get in touch</p>
        </motion.div>
        </a>
    </header>
  )
}