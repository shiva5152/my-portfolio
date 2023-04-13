import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

const ServiceCard=({index ,title,icon})=>{

  return (
    // react->tilt
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right","spring",0.5*index,0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[120px] shadow-card"
      >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <motion.div
          initial={{
            rotate:0
          }}
           animate={{
            rotate:360,
           }}
           transition={{
            delay:1,
            ease: "linear",
            duration:25,
            repeat:Infinity,
            repeatType:'loop'
          }}
          >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />
          </motion.div>

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>

    </Tilt>
  )

}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
        I'm a skilled web developer with knowledge of HTML/CSS and 
        JavaScript, and expertise in frameworks like React, Node.js, Express.js and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
    </motion.p>
    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
    
  )
}

export default SectionWrapper(About, "about");