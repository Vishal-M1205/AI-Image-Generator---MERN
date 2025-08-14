import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-row w-full m-0  bottom-0 relative mt-50'>
      <div className=' p-4 w-full  flex justify-evenly items-center '>
<img src={assets.logo} alt="" /> 
<p className='text-gray-400'>|</p>
<p className='text-gray-400'>All rights reserved. Copyrights @imagify</p>
      </div>
      <div  className=' w-full  flex items-center justify-end '>
<img src={assets.facebook_icon} className='w-10 mx-3' alt="" />
<img src={assets.instagram_icon} className='w-10 mx-3' alt="" />
<img src={assets.twitter_icon} className='w-10 mx-3' alt="" />
      </div>
    </div>
  )
}

export default Footer
