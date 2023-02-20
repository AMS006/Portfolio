import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
function Sidebar() {
  return (
    <div className='flex-col gap-6 shadow  px-3 py-4 border fixed top-64 bg-white lg:flex hidden'>
        <div className='text-3xl'>
           <a href="https://www.linkedin.com/in/anas-sain-9b9231221/" target={"_blank"} rel="noreferrer"><BsLinkedin /></a> 
        </div>
        <div className='text-3xl'>
           <a href="https://github.com/AMS006" target={"_blank"} rel="noreferrer"><BsGithub /></a> 
        </div>
    </div>
  )
}

export default Sidebar