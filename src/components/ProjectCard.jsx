import React from 'react'
import tiffinmanagment from '../images/tiffinmanagment.jpg'
function ProjectCard() {
  return (
    <div className='lg:px-20 md:px-8 px-2 flex lg:flex-row flex-col gap-10 py-4'>
        <div>
            <img src={tiffinmanagment} alt="TiffinManagment" className='w-full h-full'/>
        </div>
        <div className='flex flex-col gap-8'>
            <h2 className='text-2xl lg:text-left text-center font-bold'>Portfolio</h2>
            <p className='text-gray-700 text-lg lg:text-left text-center'>Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>
            <div className='lg:text-left text-center'>
                <button className='bg-blue-500 text-white shadow font-semibold text-xl w-32 rounded py-2'>Case Study</button>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard