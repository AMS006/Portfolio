import React from 'react'


function CaseStudyTobBar({project}) {
    
  return (
    <div className='flex gap-8 flex-col text-center lg:px-20 md:px-10 items-center px-3 py-8 h-screen justify-center' style={{background:'linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg)'}}>
        <h1 className='md:text-5xl  text-3xl font-extrabold text-center'>{project.name}</h1>
        <p className='text-xl text-gray-700'>This page contains the case study of {project.name} Project which <br /> includes  the Project Overview, Tools Used and Live Links to the official product.</p>
        <div className='bg-blue-500 rounded w-48 py-3 text-lg font-semibold text-white'>
            <a className='w-full' href={project.github} target='_blank'>Source Code</a>
        </div>
    </div>
  )
}

export default CaseStudyTobBar