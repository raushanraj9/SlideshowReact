import React, { useEffect, useState } from 'react'
import { data } from '../constant'

function Imageslideshow() {
    const [activeImage,setActiveImage]=useState(0);
    function handleImageNext()
    {
        if(activeImage>=data.length-1)
        {
            setActiveImage(0);
        }
        else{
        setActiveImage(activeImage+1);
        }
    }
    function handleImagePrev()
    {
        if(activeImage<=0)
        { 
            setActiveImage(data.length-1);
        }
        else{
            setActiveImage(activeImage-1);
        }
    }
    useEffect(()=>{
     const intervalId=setTimeout(()=>{
     handleImageNext();
      },2000)
      return ()=>{clearTimeout(intervalId)};
    },[activeImage])
  return (
    <>
    
    <div className='flex justify-center m-10'>
    <button className='p-10 m-10' onClick={handleImagePrev}>Prev</button>
        <img src={data[activeImage]} className='w-[400px] h-[500px]' alt='slideshow' />
        <button className='p-10 ' onClick={handleImageNext}>Next</button>   
    </div>
   
    </>
  )
}

export default Imageslideshow