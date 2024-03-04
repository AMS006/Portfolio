import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'
import { motion } from 'framer-motion'
const variants = {
  initial: {
    x: 0,
    y: 300,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
function ProjectCard({ project }) {

  const { mode } = useContext(UserContext)
  return (
    <>
      {project && <motion.div

        variants={variants}
        initial='initial'
        whileInView={"animate"}
        viewport={{ once: true }}
        className='lg:px-20 md:px-8 px-2 flex lg:flex-row flex-col gap-10 py-4'>
        <div className='w-full'>
          <img src={project.image} alt="TiffinManagment" className='w-full h-full' />
        </div>
        <div className='flex flex-col gap-8'>
          <h2 className={`text-2xl lg:text-left text-center font-bold`}>{project.name}</h2>
          <p className={`${mode ? 'text-white ' : ''}text-gray-700 text-lg lg:text-left text-center`}>{project.overview}</p>
          <div className='lg:text-left text-center'>
            <Link to={`/${project.id}`} className='bg-blue-500 px-2.5 text-white shadow font-semibold text-xl w-32 rounded py-2'>Case Study</Link>
          </div>
        </div>
      </motion.div>}
    </>
  )
}

export default ProjectCard