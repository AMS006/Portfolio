import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { motion } from 'framer-motion'

const textVariants = {
  initial: {
    x: 0,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function AboutSection() {
  const { mode } = useContext(UserContext)
  return (
    <div
      className={`${mode ? 'bg-slate-900 text-white ' : ' '}lg:pt-24 pt-8 pb-12 w-full  text-center px-3`} id='about'>
      <motion.div
        variants={textVariants}
        initial='initial'
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        <h1 variants={textVariants} className={`${mode ? 'text-white ' : 'text-black '}text-center font-bold text-4xl font-mono tracking-widest border-b-4 border-blue-500 inline-block py-2`}>ABOUT ME</h1>
        <p variants={textVariants} className={`${mode ? 'text-white' : 'text-gray-600'}lg:text-2xl md:text-xl text-lg py-6`}>Here you will find more information about me, what I do, and my current skills <br /> mostly   in terms of programming and technology</p>
      </motion.div>
    </div>
  )
}

export default AboutSection