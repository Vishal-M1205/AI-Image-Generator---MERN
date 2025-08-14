import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const GenButton = () => {
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
    <div className='flex flex-col items-center justify-center'>

        <h1 className='text-3xl sm:text-5xl text-shadow-lg font-semibold mt-40 mb-3' >See the magic. Try now</h1>
      <button onClick={onClickHandler} className='px-6 py-2 rounded-full bg-blue-500 hover:scale-105 transition-all duration-700 shadow-xl text-lg text-white my-5 '>
        Generate Images ✨
      </button>
    </div>
  )
}

export default GenButton
 

 