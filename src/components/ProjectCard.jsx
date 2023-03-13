import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext'
function ProjectCard({project}) {
  const navigate = useNavigate()
  const {mode} = useContext(UserContext)
  return (
    <>
    {project && <div className='lg:px-20 md:px-8 px-2 flex lg:flex-row flex-col gap-10 py-4'>
        <div className='w-full'>
            <img src={project.image} alt="TiffinManagment" className='w-full h-full'/>
        </div>
        <div className='flex flex-col gap-8'>
            <h2 className={`text-2xl lg:text-left text-center font-bold`}>{project.name}</h2>
            <p className={`${mode?'text-white ':''}text-gray-700 text-lg lg:text-left text-center`}>{project.overview}</p>
            <div className='lg:text-left text-center'>
                <button className='bg-blue-500 text-white shadow font-semibold text-xl w-32 rounded py-2' onClick={()=> navigate(`/${project.id}`)}>Case Study</button>
            </div>
        </div>
    </div>}
    </>
  )
}

export default ProjectCard