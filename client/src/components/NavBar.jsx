    import React, { useContext, useEffect } from 'react'
    import { assets } from '../assets/assets'
    import { Link, useNavigate } from 'react-router-dom'
    import { AppContext } from '../context/AppContext'

    const NavBar = () => {
        const {user,setUser,setShowlogin,credit,logout} = useContext(AppContext);
     console.log(credit)
        const navigate = useNavigate();
        console.log(user)
        return (
            <div className='flex items-center justify-between py-4'>
                <Link to='/'> <img src={assets.logo} alt="logo" className='w-28 sm:w-32 lg:w-40' /></Link>
                <div >
                    {user ?
                        <div className='flex text-center items-center gap-2 sm:gap-3'>
                            <button className='flex items-center gap-2 sm:gap-3 bg-blue-200 px-5 py-2 rounded-full hover:scale-105 transition-all duration-700' onClick={()=>{
                                navigate('/buy')
                            }}><img src={assets.credit_star} className='w-5' alt="" />Credits left: {credit}</button>
                         <p>Hi {user}! </p>
                            <div className='relative group  '>
                                <img src={assets.profile_icon}  className="w-10 drop-shadow" alt="" />
                                
                                <div className='absolute  opacity-0 group-hover:opacity-100  top-1 left-1/2 transform -translate-x-1/2 pt-10  w-fit z-10  rounded-full pointer-events-none group-hover:pointer-events-auto transition-opacity duration-700 text-black cursor-pointer '>
                                    <ul className=' bg-gray-300 px-7 py-2 rounded-lg'>
                                        <li onClick={()=>{setUser(false);
                                             logout();}}>Logout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='flex items-center gap-3 sm:gap-5 '>
                            <p onClick={()=>{
                                navigate('/buy');
                            }} className='cursor-pointer '>Pricing</p>
                            <button onClick={()=>{setShowlogin(true)}} className='bg-zinc-800 text-white py-2  px-7 sm:px-12 rounded-full cursor-pointer  '>Login</button>
                        </div>
                    }


                </div>
            </div>
        )
    }

    export default NavBar
