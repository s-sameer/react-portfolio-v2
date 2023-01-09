import { motion } from "framer-motion"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import {AiOutlineGlobal, AiOutlineGithub} from 'react-icons/ai'
import data from "./Data"

const Projects = () => {

  return (
    <div className='h-screen flex flex-col justify-evenly items-center relative overflow-y-hidden md:mt-0 mt-32'>
        <h1 className='absolute xl:top-28 top-28 text-center uppercase tracking-[20px]'>Projects</h1>
        <div className="w-full absolute top-[30%] bg-[#afafaf]/10 left-0 h-[400px] -skew-y-12"/>
        <div className='relative w-full flex'>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper max-w-[95%] md:max-w-[80%] xl:max-w-[70%]">
                {data.map((project, i) => 
                    <SwiperSlide key={i} className='w-screen flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-14 md:p-16 h-screen mt-20'>
                        {/* We cant apply motion obj to Image, so to get around this problem I wrapped the image inside a div and applied motion to that instead */}
                        <motion.div 
                        initial={{opacity: 0, y: -200}}
                        whileInView={{opacity: 1, y:0}}
                        whileHover={{scale: 1.1}}
                        className="relative group" //Using group class to apply hover effects to th entire group
                        transition={{duration: 0.25, opacity: {duration: 1}, y:{duration: 1}}}>
                            <img className=" rounded-xl group-hover:opacity-50" src={project.source} style={{width: 650, }}/>
                            <div className="absolute inset-0 hidden group-hover:inline-block max-h-[98%] rounded-xl group-hover:transition group-hover:ease-in-300">
                                <div className="flex items-center justify-center h-full gap-6">
                                    <a href={project.demo_url} target="_blank" rel="noreferrer">
                                        <button className="flex items-center justify-center gap-2 bg-blue-500 rounded-full w-24 h-10 text-white">
                                            <AiOutlineGlobal className="text-xl"/>
                                            <h1>Demo</h1>
                                        </button>
                                    </a> 
                                    <a href={project.git_url} target="_blank" rel="noreferrer">
                                        <button className="flex items-center justify-center gap-2 bg-blue-500 rounded-full w-24 h-10 text-white">
                                            <AiOutlineGithub className="text-xl"/>
                                            <h1>Github</h1>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                        <h4 className="text-[#dadada] max-w-[600px] text-center font-semibold p-2">
                            {project.desc}
                        </h4>
                        <div className="">

                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    </div>
  )
}

export default Projects