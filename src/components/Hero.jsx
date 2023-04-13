import {motion} from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      {/* intro part */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto felx flex-row items-start gap-5`}>
        <div className='flex'>
          <div className='flex flex-col justify-center items-center mt-5 mr-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]'></div>
            <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Shiva</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop responsive user <br className='sm:block hidden'/>interfaces and web applications.</p>
          </div>
        </div>
      </div>
      {/* computer canvas ->react fiber/three js */}
      <ComputersCanvas/>
      {/* mouse->framer motion */}
      <div className='absolute xs:bottom-1 bottom-36 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex items-start p-2 justify-center'>
            <motion.div 
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration:1.5,
                repeat:Infinity,
                repeatType:'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero