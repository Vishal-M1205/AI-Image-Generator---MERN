import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react';
import axios from 'axios';

import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const Login = () => {
  const {showlogin,setShowlogin,backendURL,setUser,setToken} = useContext(AppContext);
  const [login,setLogin] = useState(true);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  async function handleSubmit(e){
  e.preventDefault()
  try {
    if(login){
     const response =  await axios.post(`${backendURL}/api/user/login`,{
       email,password
      })
      const data = response.data
if(data.success == true ) {
    setUser(data.user.name);
   
setToken(data.token);
localStorage.setItem('token',data.token);
setShowlogin(false)
toast.success("Login Success");
    }
    else{
toast.error(data.message);
    }
    }
    else{
      const response = await axios.post(`${backendURL}/api/user/register`,{
        name,email,password
      })
      const data = response.data
      if(data.success){
        toast.success("User created");
        setLogin(true);
      }
      else{
        toast.error(data.message);
     
      }
    }
    
  } catch (error) {
    
  }
  }
  return (
    <div className='fixed z-10 top-0 bottom-0 left-0 right-0 backdrop-blur-sm bg-black/30 flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='relative px-10 py-3 rounded-2xl bg-white shadow-2xl'>
        <h1 className='text-3xl font-semibold text-center py-2 '>{login ? 'Login':'Sign Up'}</h1>
        <p className='text-sm text-gray-500 text-center'>{login?"Welcome back! Please sign in to continue":"Create an account now to get started!"}</p>
        {login ? null : <div className='flex rounded-full border border-slate-500 my-3 py-2 w-fit'>
            <img src={assets.profile_icon} alt="" className='w-7'/>
            <input type="text" value={name} onChange={(e)=>{
              setName(e.target.value)
            }} placeholder='Fullname' className='outline-none px-1'/>
        </div>}
        <div className='flex rounded-full border border-slate-500 my-3 py-2 w-fit'>
            <img src={assets.email_icon} alt="" className='w-auto ml-2'/>
            <input type="text" value={email} onChange={(e)=>{
              setEmail(e.target.value)
            }} placeholder='E-mail' className='outline-none px-1'/>
        </div>
        <div className='flex rounded-full border border-slate-500 my-3 py-2 w-fit'>
            <img src={assets.lock_icon} alt="" className='w-auto ml-2'/>
            <input type="password" value={password} onChange={(e)=>{
             setPassword(e.target.value)            }} placeholder='Password' className='outline-none px-1'/>
        </div>
       {login?<p className='pt-1 pb-3 underline text-blue-400 cursor-pointer'>Forget password?</p>:null} 
       <button type='submit' className='px-5 py-2 mb-3 text-white bg-blue-500 rounded-full w-full hover:scale-105 transition-all duration-150  shadow-2xs cursor-pointer' >{login ? "Login": "Create Account"}</button>
      
      {login?  <p  className='text-center text-md pt-1 pb-2 '>Don't you have an account? <span onClick={()=>{
        setLogin(false)
       }} className='text-blue-500 underline cursor-pointer'>Sign Up</span></p>:<p className='text-center text-md  pb-3 '>Already have an account? <span onClick={()=>{
        setLogin(true)
       }} className='text-blue-500 underline cursor-pointer'>Login</span></p> } 
       <img src={assets.cross_icon} alt="" onClick={()=>{
        setShowlogin(false)

       }}  className='absolute top-5 right-5 cursor-pointer'/>
      </form>
    </div>
  )
}

export default Login
