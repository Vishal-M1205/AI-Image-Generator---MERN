import React from 'react';
import {inView, motion, scale}from 'framer-motion';
import {stepsData} from '../assets/assets'
const Steps = () => {
  return (
    <motion.div
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{duration:2,delay:0.4}}
     className='flex justify-center items-center flex-col'>
      <h1 className='text-3xl sm:text-6xl font-semibold my-4 text-shadow-lg'>How it works</h1>
      <p className='text-lg text-gray-400 text-shadow-sm  '>Transform words into images</p>

      <div>
        {stepsData.map((value,index)=>(
              <div key={index} className='flex bg-gradient-to-br from-white to-blue-500 m-4 px-6 py-3 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer shadow-lg'>
                <img  src={value.icon} alt="" />
                <div className='p-3'>
                  <h2 className='mb-1'>{value.title}</h2>
                  <p>{value.description}</p>
                </div>
              </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps
