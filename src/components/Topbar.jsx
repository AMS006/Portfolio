import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import './style.css'
function Topbar() {
  const {mode} = useContext(UserContext)
  return (
    <div className='flex flex-col items-center relative  justify-center gap-10 px-4 h-screen' id='home' style={{background:`${mode?'linear-gradient(to right,rgba(15,23,42,.9),rgba(15,23,42,.9)),url(https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg)':'linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg)'}`}}>
        <h1 className={`${mode?'text-white ':''}md:text-7xl text-3xl font-bold text-center w-full`}>HEY, I'M ANAS SAIN</h1>
        <div>
            <p className={`${mode?'text-white ':'text-gray-700 '} md:text-xl text-lg text-center `}>A Full Stack focused Web Developer building the Full Stack Websites and Web <br/> Applications that leads to the success of the overall product</p>
        </div>
        <div className='text-center'>
            <a className='border px-12 text-xl py-3 bg-blue-500 text-white rounded-md font-semibold' href='#projects'>PROJECTS</a>
        </div>

       <div className={`${mode?'':''} w-full  justify-center lg:flex hidden absolute bottom-24`}>
          <div className={`${mode?'border-white mousedark ':'border-gray-700 mouse '}w-6 h-10 border-2  relative mouse`} style={{borderRadius:'60px'}}>

          </div>
      </div>
    </div>
  )
}

export default Topbar