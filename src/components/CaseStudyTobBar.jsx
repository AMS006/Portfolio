import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { BsGithub } from 'react-icons/bs'

function CaseStudyTobBar({project}) {
    const {mode} = useContext(UserContext)
  return (
    <div className='flex gap-8 flex-col text-center lg:px-20 md:px-10 items-center px-3 py-8 h-screen justify-center' style={{background:`${mode?'linear-gradient(to right,rgba(15,23,42,.9),rgba(15,23,42,.9)),url(https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg)':'linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg)'}`}}>
        <h1 className={`${mode?'text-white ':' '}md:text-5xl  text-3xl font-extrabold text-center`}>{project.name}</h1>
        <p className={`${mode?'text-white ':'text-gray-700 '} text-xl`}>This page contains the case study of {project.name} Project which <br /> includes  the Project Overview, Tools Used and Live Links to the official product.</p>
        <div className='bg-blue-500 rounded w-48 py-3 text-lg font-semibold text-white'>
            <a className='flex items-center justify-center gap-1.5 w-full' href={project.github} target='_blank' rel="noreferrer"><BsGithub className='text-xl'/> Source Code</a>
        </div>
    </div>
  )
}

export default CaseStudyTobBar