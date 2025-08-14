import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1)
  const [isLoaded, setisLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const {genImage,user} = useContext(AppContext);
  async function onSubmitHandler(e) {
   e.preventDefault()
   setLoading(true)
   if(input){
    const image = await genImage(input);
    if(image){
 setImage(image);
 setisLoaded(true);
    }
   setLoading(false)
   }
  }
  return (

    <>
   {user ? <form onSubmit={onSubmitHandler} className='flex flex-col justify-center items-center mt-20 '>

      <div className='relative'>
        <img src={image || assets.sample_img_1} alt="" className='max-w-sm rounded ' />
        <span className={`absolute h-1  bg-blue-500   bottom-0 left-0 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`} />
      </div>
      <p className={!loading ? "hidden" : ""}>Loading...</p>
      {!isLoaded &&
        <div className='mt-10 bg-gray-700  rounded-2xl text-white'>
          <input value={input} onChange={(e) => {
            setInput(e.target.value);
          }} type="text" className='bg-gray-700 p-2 rounded-2xl pr-30 mr-1 outline-none' placeholder='Describe your idea here...' />
          <button type='submit' className='pr-3 bg-black p-4 m-0 rounded-2xl cursor-pointer'> Generate</button>
        </div>}
      {isLoaded && <div className='flex flex-wrap gap-5 p-2 mt-5 '>
        <p className='text-black cursor-pointer border-2 border-black px-7 py-2 rounded-full transition-all duration-150 hover:scale-105' onClick={() => {
          setisLoaded(false);
          setInput("");
          setImage(null)
        }}>Generate Another?</p>
        <a className="text-white bg-blue-500 cursor-pointer border-2 border-black px-7 py-2 rounded-full transition-all duration-150 hover:scale-105" href={image} download={image}>Download</a>
      </div>}
    </form> : <div className='m-auto mt-48 mb-96 text-4xl w-full text-center'>
      Please login to generate images
      </div>}
    </>
    
  )
}

export default Result
