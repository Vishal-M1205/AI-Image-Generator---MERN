import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import {Link,useNavigate} from 'react-router-dom';
import {motion}from 'framer-motion';
import { AppContext } from '../context/AppContext';
const Header = () => {
  const navigate  = useNavigate();
  const {user,setShowlogin} = useContext(AppContext) 
  const onClickHandler =()=>{
if (user){
navigate('/result')
}
else{
  setShowlogin(true) 
}
  }
  return (
    <motion.div className='flex flex-col justify-center items-center  text-center my-20'
    initial={{opacity:0.2,y:100}}
    transition = {{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    >
      <motion.div initial={{opacity:0,y:-20}}
      animate={{
        opacity:1,y:0
      }}
      transition={{
        duration:1,delay:0.3
      }}
      className='text-stone-800 flex gap-2 text-center bg-white px-6 py-3 rounded-full border border-neutral-500 flex-wrap' >
        <p>Best text to imgae generator</p>
        <img src={assets.star_icon} alt="" />
        
      </motion.div>
      <motion.h1 
      initial={{opacity:0.3,y:9,scale:0}}
      animate={{scale:1,opacity:1,y:0}}
      transition={{delay:0.3,duration:1}}
      className='text-4xl my-10 max-w-[300px] sm:text-7xl sm:max-w-[590px] text-center text-shadow-lg'>Turn text to <span className='text-blue-500'>image</span>, in seonds</motion.h1>
      <motion.p 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.8,delay:0.5}}
      className='text-gray-400 max-w-xl text-center'>
        Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen
      </motion.p>

<motion.button
whileHover={{scale:1.05}}
whileTap = {{scale:0.95}}
initial={{scale:0,opacity:0.3}}
animate={{scale:1,opacity:1}}
transition={{duration:0.6}}
onClick={onClickHandler}
className='my-8 bg-blue-500  text-white px-7 py-3 rounded-full shadow-md S'>Generate Images ✨</motion.button>

      
      <div className='flex flex-row gap-2 '>
       {Array(4).fill('').map((value,index )=>(
        <img className='w-60 rounded-md sm:w-40 shadow-md hover:scale-105 transition-all duration-300 cursor-pointer' src={index % 2 === 0 ?assets.sample_img_1 : assets.sample_img_2} key={index}/>
       ))}
      </div>
      <p className='my-8 p-2 bg-gray-100 rounded-full shadow-lg '> Generated images from imagify 💫 </p>
    </motion.div>
  )
}

export default Header
