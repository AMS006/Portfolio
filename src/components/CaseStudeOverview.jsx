import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext'

function CaseStudeOverview({project}) {
    const navigate = useNavigate()
    const {mode} = useContext(UserContext)
  return (
    <div className={`${mode?'bg-slate-900 text-white ':' '}lg:px-20 md:px-8 px-3 flex items-center flex-col w-full`}>
        <div className='py-4 flex items-center justify-center'>
            <img src={project.image} alt={project.name} className='lg:w-3/4 md:w-4/5 w-full h-auto'/>
        </div>
        <h1 className='py-4 font-bold text-3xl lg:w-3/4 md:w-4/5'>Project Overview</h1>
        <div className='lg:w-3/4 md:w-4/5 flex flex-col gap-4 md:text-lg text-gray-600 py-4'>
            {project.overview.map((project) =>(
                <p className={`${mode?'text-white':''}`}>{project}</p>
            ))}
        </div>
        <h1 className='py-4 font-bold text-3xl lg:w-3/4 md:w-4/5 '>Tools Used</h1>
        <div className='flex gap-4 lg:w-3/4 md:w-4/5 py-6 flex-wrap'>
            {project.tools.map((tool)=>(
                <div className='bg-gray-300 text-gray-900 font-semibold  px-4 py-2 rounded'>
                    <span>{tool}</span>
                </div>
            ))}
        </div>
        <div className='flex gap-4 items-center lg:w-3/4 md:w-4/5 pb-8'>
            {project?.live ? 
            <div>
                <h1 className='py-4 font-bold text-3xl lg:w-3/4 md:w-4/5 '>See Live</h1>
                <div className='flex md:gap-4 gap-2 items-center'>
                    <a className='bg-blue-500 border-2 border-blue-500 rounded text-white font-semibold sm:px-5 px-3 py-2' href={project.live} target='_blank'>PROJECT LINK</a>
                    {project?.youtube && <a className='bg-blue-500 border-2 border-blue-500 rounded text-white font-semibold sm:px-5 px-3  py-2' href={project.youtube} target='_blank'>Video LINK</a>}
                    <button className='border-2 border-blue-500 text-blue-500 px-5 py-2 rounded font-semibold' onClick={()=> navigate('/')}>Go BACK</button>
                </div>
            </div>:
            <div className='flex md:gap-4 gap-2 items-center lg:w-3/4 md:w-4/5 pb-8'>
                {project?.youtube && <a className='bg-blue-500 border-2 border-blue-500 rounded text-white font-semibold sm:px-5 px-3  py-2' href={project.youtube} target='_blank'>Video LINK</a>}
                <button className='border-2 border-blue-500 text-blue-500 sm:px-5 px-3 py-2 rounded font-semibold' onClick={()=> navigate('/')}>Go BACK</button>
            </div>
            }
        </div>
    </div>
  )
}

export default CaseStudeOverview