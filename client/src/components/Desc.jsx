import React from 'react'
import { assets } from '../assets/assets'

const Desc = () => {
  return (
    <div className='flex flex-col justify-center items-center my-15'>
        <h1 className='text-3xl sm:text-5xl font-semibold text-shadow-lg' >Create AI Images</h1>
        <p className='text-gray-400 font-medium'>Turn your imagination into visuals</p>
      
      <div className='flex my-10 w-[800px]' >
        <img src={assets.sample_img_1} alt=""  className='w-80 xl:w-96 rounded-lg '/>

        <div className='ml-5 flex flex-col items-center justify-center '>
            <h2 className='text-3xl mb-2 font-semibold '>Introducing the AI-Powered Text to Image Generator</h2>
            <p className='text-gray-700 text-xl'>Transform your words into stunning visuals with our advanced Text to Image Generator. Simply type your imagination, and watch AI bring it to life—perfect for creatives, marketers, and storytellers seeking unique, high-quality images in seconds.</p>
        </div>
      </div>
    </div>
  )
}

export default Desc
