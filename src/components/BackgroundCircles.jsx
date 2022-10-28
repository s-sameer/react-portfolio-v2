import {motion} from 'framer-motion'

function BackgroundCircles() {
  return (
    <motion.div initial={{
      opacity: 0,
    }}
    animate={{
      opacity: [0.5, 0.6, 0.7, 0.8, 1],
      scale: [1,0.8,3,0.8,1],
    }}
    transition={{
      duration: 3
    }}
    className='relative flex justify-center items-center '>
      {/* Positioning them relative to relative div */}
        <div className='absolute border border-[#767676] rounded-full h-[200px] w-[200px] mt-52
        animate-ping'/>
        <div className='absolute border border-[#2e2e2e] rounded-full h-[500px] w-[500px] mt-52'/>
        <div className='absolute border border-[#ab13b4] rounded-full h-[650px] w-[650px] mt-52
        opacity-20 animate-pulse'/>
    </motion.div>
  )
}

export default BackgroundCircles