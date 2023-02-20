import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
function Footer() {
  return (
    <div className='px-20 bg-black text-white'>
      <div className='flex justify-between py-16'>
        <div className='flex flex-col gap-3 w-3/4'>
          <h1 className='font-bold text-3xl'>Anas Sain</h1>
          <p className='text-lg'>A Full Stack focused Web Developer building the Full Stack Websites and Web Applications that leads to the success of the overall product</p>
        </div>
        <div className='flex flex-col gap-4 '>
          <h1 className='text-2xl font-bold'>Socials</h1>
          <div className='flex gap-6 text-2xl'>
            <span><BsLinkedin /></span>
            <span><BsGithub /></span>
            <span><SiLeetcode /></span>
          </div>
        </div>
      </div>
      <div className='py-8 border-t border-white'>
        <p className='text-center'>© Copyright 2023. Made by <b>Anas Sain</b></p>
      </div>
    </div>
  )
}

export default Footer