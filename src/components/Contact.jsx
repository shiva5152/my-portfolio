import { useState,useEffect, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import {styles}  from '../styles';
import {EarthCanvas}from './canvas'
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'



const Contact = () => {
  const[isError,setIsError]=useState(false);
  const [loading,setLoading]=useState(false);
  // alert
  const [alertText,setAlertText]=useState("");
  useEffect(()=>{
    if(alertText){
      setTimeout(()=>{
        setAlertText(false);
      },2000)
    }
  },[alertText]);
  // form
  const fromRef=useRef(null);
  const [form,setForm]=useState({
    name:"",
    email:"",
    message:"",
  })

  const handleChange =(e)=>{
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
    
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);
    //public key-> FH8jRh_Hb8glmZtfK
    //template id-> template_ico14ob
    //service id-> service_6yh669g

    emailjs
      .send("service_6yh669g","template_ico14ob",
        {
          from_name: form.name,
          to_name: "Shiva",
          from_email: form.email,
          to_email: "ms4544311@gmail.com",
          message:`{ from ${form.email} \n ${form.message}}`,
        },
        "FH8jRh_Hb8glmZtfk"
      )
      .then(
        () => {
          setLoading(false);
          setAlertText("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
          setIsError(false);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          setAlertText("Ahh, something went wrong. Please try again.");
          setIsError(true);
        }
      )
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* form part */}
        <motion.div variants={slideIn('left','tween',0.2,1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>

          <form ref={fromRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            {/* name */}
            <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            </label>
            {/* email */}
            <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            </label>
            {/* message */}
            <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            </label>
            {/* button */}
            <button
            type='submit'
            disabled={loading}
            className=' bg-[#915eff] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
            {loading ? "Sending..." : "Send"}
            </button>
          </form>
          

        </motion.div>

        {/* earth part */}
        <motion.div variants={slideIn("right","tween",0.2,1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas />
        </motion.div>
        {/* alert part */}
        {alertText && (
          <motion.div
          className={`${!isError?'bg-green-400':'bg-red-400'} fixed bottom-[-50px] left-[50%] flex justify-center items-center px-2 py-1 rounded`}
           initial={{
             bottom:-100
           }}
          animate={{
             bottom:1
           }}
           transition={{
            type:"spring",
             duration:0.5
           }}
           
           style={{transform:"translate(-50%, -50%)"}}
          >
          <span className="mr-2 text-xl">{!isError?<BsFillCheckCircleFill/>:<AiFillCloseCircle/>} </span> {alertText}
         </motion.div>
        )}
        
    </div>
  )
}

export default SectionWrapper(Contact,"contact")