import React, { useContext } from 'react'
import {assets, plans} from '../assets/assets'
import { AppContext } from '../context/AppContext'
const BuyCredit = () => {
  const {user} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center justify-center my-20 '>
       <button className='text-center px-6 py-2 rounded-full text-2xl border '>Our Plans</button>
       <h1 className='text-5xl text-shadow-md font-semibold my-5'>Choose your plan</h1>
       <div className='flex flex-row gap-3 my-4'>
            {plans.map((value,index)=>{
              return (
              <div key={index} className='bg-neutral-100 w-80 rounded-lg shadow-2xl flex flex-col items-start justify-items-start py-10 px-5 border border-neutral-300 hover:scale-105 transition-all duration-300'>
                      <img className='mt-3' src={assets.logo_icon} alt="" />
                      <h1 className='text-3xl mt-2'>{value.id}</h1>
                      <p className='text-gray-400'>{value.desc}</p>
                      <p className='mt-3'> <span className='text-4xl font-medium'>{value.price}$</span> <span className='text-gray-400'>/ {value.credits} credits</span></p>
                      <div className='flex items-center justify-center text-center mt-8'>
                        <button className='text-white bg-black px-4 py-2 rounded-xl w-60 ml-5'>{user ? 'Purchase': 'Get Started'}</button>
                      </div>
                      
              </div>)
            })}

       </div>
    </div>
  )
}

export default BuyCredit
