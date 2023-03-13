import React, { useContext } from 'react'
import tiffinmanagment from '../images/tiffinmanagment-bg.png'
import zomatoclone from '../images/zomatoclone-bg.png'
import portfolio from '../images/portfolio-bg.png'
import bookmyshow from '../images/bookmyshow1-bg.png'
import ProjectCard from './ProjectCard'
import { UserContext } from '../UserContext'
function Projects() {
  const {mode} = useContext(UserContext)
  const projects = [
    {
     image:tiffinmanagment,
     id:"project-1",
     name:"Tiffin Managment System",
     overview:"Tiffin Managment System is a project made for the tiffin providers who can sell their tiffin service online and a user a buy a home made tiffin from those sellers"
    },
    {
      image:zomatoclone,
      id:"project-2",
      name:"Zomato Clone",
      overview:"Zomato Clone was the first MERN stack project build by me during training course of devtown. I have learned lots of technologies while building this website"
    },
    {
      image:portfolio,
      id:"project-3",
      name:"My Portfolio",
      overview:"Portfolio is the website build my me for showcasing my all skills my all projects to everyone. It was a great experience for me while building this website"
    },
    {
      image:bookmyshow,
      id:"project-4",
      name:"Book My Show Clone",
      overview:"Book My Show Clone was the first complete website which I have build after learning complete React I have used MovieDB API for movies"
    }  
  ]
  return (
    <div className={`${mode?'bg-slate-900 text-white ':''}py-8 lg:px-20 md:px-10 px-4`} id='projects'>
        <div className='flex justify-center'>
            <h1  className='text-4xl font-extrabold inline-block text-center tracking-widest font-mono border-b-4 py-2 border-blue-500'>PROJECTS</h1>
        </div>
        <div className='flex justify-center py-6'>
            <p className={`${mode?'text-white ':''}text-xl text-gray-600 text-center`}>Here you will find some of the personal projects that I created with each project containing its own case study</p>
        </div>
        <div>
          {projects.map((project) =>(
            <div>
              
            <ProjectCard project={project} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Projects