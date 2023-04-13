import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { textVariant,fadeIn } from "../utils/motion"
import { Link } from "react-router-dom"
import {AiOutlineArrowUp} from "react-icons/ai"

const ProjectCard=({index,name,description,tags,image,source_code_link,live_at_link})=>{

  return (
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
      <Tilt
        options={{max:45,scale:1,speed:450}}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        {/* imsge part */}
        <div className="relative w-full h-[230px]">
          {/* image */}
          <img src={image} alt={'project_image'} className="w-full h-full object-cover rounded-2xl" />
          {/* github icon */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={()=>window.open(source_code_link,"_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
        {/* description part*/}
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        {/* live link btn */}
        <motion.div className="my-5 bg-[#915eff] font-bold  w-fit rounded py-1" whileHover={{scale:1.1}} whileTap={{scale:0.95}} >
          {index===1 ? (
            <Link
            to={`${live_at_link}`}
            className="px-2 flex items-center"
            onClick={()=>{
              window.scrollTo(0.0);
            }}
          > 
           Live at <span className="ml-2 rotate-45"><AiOutlineArrowUp/></span>
          </Link>
          ):(
            <a onClick={()=>window.open(live_at_link,"_blank")} className="px-2 cursor-pointer flex items-center">
              Live at <span className="ml-2 rotate-45"><AiOutlineArrowUp/></span>
            </a>
          )}
        </motion.div>
        {/* tags part */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>

    <div className="w-full flex" >
      <motion.p variants={fadeIn("","",0.1,1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.  
      </motion.p>
    </div>
    <div className="flex flex-wrap gap-7 mt-20">
    {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
    ))}
    </div>

    </>
  )
}

export default SectionWrapper(Works,"");