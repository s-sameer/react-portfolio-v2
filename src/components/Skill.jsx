import {motion} from "framer-motion"

function Skill({directionLeft, name, url}) {
  return (
    <motion.div 
    className="flex flex-col max-w-[100px] md:min-w-[130px] items-center p-3 bg-[#262626] hover:shadow-2xl rounded-3xl transition ease-in-300 cursor-pointer"
    initial={{
        x: directionLeft? -100: 100,
        opacity: 0
    }}
    whileInView={{
        x: 0,
        opacity: 1
    }}
    whileHover={{scale: 1.1}}
    transition={{duration: 1, scale: {duration:0.05}}}>
        <img
        src={url}
        className="w-[3rem] h-[3rem] md:w-[5.5rem] md:h-[5.5rem] object-contain"
        />
        <h1>{name}</h1>
    </motion.div>
  )
}

export default Skill