import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
const Testimonial = () => {
  return (
    <div className='flex flex-col items-center justify-center'>

      <h1 className='text-color text-3xl sm:text-5xl font-semibold text-shadow-lg'>Testimonial</h1>
      <p className='text-gray-500'>Our satisfied customers</p>
      <div className='flex flex-row m-4'>
        {testimonialsData.map((value, index) => {
          return (<>
            <div key={index} className='flex flex-col m-4 bg-gradient-to-bl from-gray-200 to-blue-200 py-5 px-3 rounded-lg text-center shadow-2xl hover:scale-105 transition-all duration-700'>
              <img className='w-30 m-auto' src={value.image} alt="" />
              <h1 className='text-lg  pt-2 w-auto'>{value.name}</h1>
              <p className='text-gray-700 my-1'>{value.role}</p>
              <p className='m-0 flex flex-row items-center justify-center  '>{Array(value.stars).fill(" ").map(() => {
                return (
                  <img className='m-0 ' src={assets.rating_star} alt="" />
                )
              }
              )}</p>
              <p className='px-3 text-gray-600 '>{value.text}</p>
              
            </div>
          </>)
        })}

      </div>

    </div>
  )
}

export default Testimonial;
