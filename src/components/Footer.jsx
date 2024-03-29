import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'
function Footer() {
  return (
    <div className='lg:px-20 md:px-8 px-3 bg-[#1e293b] text-white'>
      <div className='flex md:flex-row flex-col-reverse gap-8 justify-between md:py-16 py-8'>
        <div className='flex flex-col gap-3 md:w-3/4'>
          <h1 className='font-bold lg:text-3xl  text-2xl'>Anas Sain</h1>
          <p className='lg:text-lg'>A Full Stack focused Web Developer building the Full Stack Websites and Web Applications that leads to the success of the overall product</p>
        </div>
        <div className='flex flex-col gap-4 '>
          <h1 className='text-2xl font-bold'>Socials</h1>
          <div className='flex gap-6 text-2xl'>
            <a href="https://www.linkedin.com/in/anas-sain-9b9231221/" target='_blank' rel='noreferrer'><span><BsLinkedin /></span></a>
            <a href="https://github.com/AMS006" target='_blank' rel='noreferrer'><span><BsGithub /></span></a>
            <a href="https://leetcode.com/Anas_Sain_006/" target='_blank' rel='noreferrer'><span><SiLeetcode /></span></a>
          </div>
        </div>
      </div>
      <div className='py-8 border-t border-white'>
        <p className='text-center'>© Copyright 2024. Made by <b>Anas Sain</b></p>
      </div>
    </div>
  )
}

export default Footer