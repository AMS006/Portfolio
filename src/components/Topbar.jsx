import React from 'react'
import './style.css'
function Topbar() {
  return (
    <div className='flex flex-col items-center relative  justify-center gap-10 px-4 topbar'>
        <h1 className='md:text-7xl text-3xl font-bold text-center w-full'>HEY, I'M ANAS SAIN</h1>
        <div>
            <p className='text-gray-700 md:text-xl text-lg text-center '>A Full Stack focused Web Developer building the Full Stack Websites and Web <br/> Applications that leads to the success of the overall product</p>
        </div>
        <div className='text-center'>
            <button className='border w-60 text-xl py-3 bg-blue-500 text-white rounded-md font-semibold'>PROJECTS</button>
        </div>

       <div className='w-full  justify-center lg:flex hidden absolute bottom-0'>
          <div className='w-6 h-10 border-2 border-gray-700 relative mouse' style={{borderRadius:'60px'}}>

          </div>
      </div>
    </div>
  )
}

export default Topbar