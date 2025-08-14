import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Desc from '../components/Desc'
import Testimonial from '../components/Testimonial'
import GenButton from '../components/GenButton'
import { Link, useNavigate } from 'react-router-dom'
const Home = () => {

  return (
    <div>
     <Header/>
     <Steps/>
     <Desc/>
     <Testimonial/>
     
      <GenButton/>
     
    
    
    </div>
  )
}

export default Home
