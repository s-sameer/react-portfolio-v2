import {motion} from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import Skill from './Skill'
import "swiper/css";
import pandas from "../images/pandas.svg"
import jenkins from "../images/jenkins.svg"
import rust from "../images/rust.svg"
import nexjs from "../images/nextjs-icon.svg"

function Skills() {
  return (
    <motion.div className="h-screen flex flex-col relative text-center md:text-left
    xl:flex-row max-w-[2000px] xl:px-10 justify-center items-center xl:space-y-0 mx-auto">
      <h3 className="absolute top-24 pl-2 uppercase tracking-[20px]">Skills</h3>
      <h2 className="absolute top-36">Swipe/Drag images to the left to see more &rarr; </h2>
      <div className="flex justify-center w-[100%]">
        <Swiper 
        className="mySwiper max-w-[1100px] min-h-[700px] top-10 absolute xl:top-36">
          <SwiperSlide>
            <div className="grid-cols-2 relative px-2 grid md:grid-cols-4 md:top-30 xl:top-10 top-40 gap-8 max-w-fit mx-auto">
              <Skill directionLeft={true} name="HTML" url="https://www.svgrepo.com/show/373669/html.svg"/>
              <Skill directionLeft={true} name="CSS" url="https://www.svgrepo.com/show/373535/css.svg"/>
              <Skill directionLeft={true} name="JavaScript" url="https://www.svgrepo.com/show/349419/javascript.svg"/>
              <Skill directionLeft={true} name="TypeScript" url="https://www.svgrepo.com/show/349540/typescript.svg"/>
              <Skill name="React" url="https://www.svgrepo.com/show/354259/react.svg"/>
              <Skill name="Redux" url="https://www.svgrepo.com/show/354274/redux.svg"/>
              <Skill name="Next.js" url={nexjs}/> 
              <Skill name="Node.js" url="https://www.svgrepo.com/show/373929/node.svg"/>
              <Skill name="MongoDB" url="https://www.svgrepo.com/show/373845/mongo.svg"/>
              <Skill name="Firebase" url="https://www.svgrepo.com/show/353735/firebase.svg"/>
              <Skill name="PostgreSQL" url="https://www.svgrepo.com/show/373965/pgsql.svg"/> 
              <Skill name="GraphQL" url="https://www.svgrepo.com/show/353834/graphql.svg"/> 
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-32">
            <div className="grid-cols-2 relative px-2 grid md:grid-cols-4 md:top-30 xl:top-10 top-40 gap-8 max-w-fit mx-auto">
            <Skill name="Python" url="https://www.svgrepo.com/show/354238/python.svg"/>
              <Skill name="Java" url="https://www.svgrepo.com/show/184143/java.svg"/>
              <Skill name="C++" url="https://www.svgrepo.com/show/303480/c-logo.svg"/>
              <Skill name="Rust" url={rust}/>
              <Skill directionLeft={true} name="Pandas" url={pandas}/> 
              <Skill directionLeft={true} name="Scikit-learn" url="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/390px-Scikit_learn_logo_small.svg.png?20180808062052"/> 
              <Skill directionLeft={true} name="Material UI" url="https://www.svgrepo.com/show/354048/material-ui.svg"/> 
              <Skill directionLeft={true} name="Tailwind CSS" url="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"/> 
              <Skill name="Figma" url="https://www.svgrepo.com/show/354987/figma.svg"/> 
              <Skill name="Git" url="https://www.svgrepo.com/show/353782/git-icon.svg"/> 
              <Skill name="Docker" url="https://www.svgrepo.com/show/373553/docker.svg"/> 
              <Skill name="Jenkins" url={jenkins}/> 
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  )
}

export default Skills