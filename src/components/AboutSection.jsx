import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

function AboutSection() {
  const {mode} = useContext(UserContext)
  return (
    <div className={`${mode ? 'bg-slate-900 text-white ':' '}lg:pt-24 pt-8 pb-12 w-full  text-center px-3`} id='about'>
        <h1 className={`${mode?'text-white ':'text-black '}text-center font-bold text-4xl font-mono tracking-widest border-b-4 border-blue-500 inline-block py-2`}>ABOUT ME</h1>
        <p className={`${mode ?'text-white':'text-gray-600'}lg:text-2xl md:text-xl text-lg py-6`}>Here you will find more information about me, what I do, and my current skills <br /> mostly   in terms of programming and technology</p>
    </div>
  )
}

export default AboutSection