import React from 'react'
import tiffinmanagment from '../images/tiffinmanagment.jpg'
import zomatoclone from '../images/zomatoclone.jpg'
import portfolio from '../images/portfolio.jpg'
import bookmyshow from '../images/bookmyshow1.jpg'
import ProjectCard from './ProjectCard'
function Projects() {
  const projects = [
    {
     image:tiffinmanagment,
     id:"project-1",
     name:"Tiffin Managment System"
    },
    {
      image:zomatoclone,
      id:"project-2",
      name:"Zomato Clone"
    },
    {
      image:portfolio,
      id:"project-3",
      name:"My Portfolio"
    },
    {
      image:bookmyshow,
      id:"project-4",
      name:"Book My Show Clone"
    }
  ]
  return (
    <div className='py-8 lg:px-20 md:px-10 px-4' id='projects'>
        <div className='flex justify-center'>
            <h1  className='text-4xl font-extrabold inline-block text-center tracking-widest font-mono border-b-4 py-2 border-blue-500'>PROJECTS</h1>
        </div>
        <div className='flex justify-center py-6'>
            <p className='text-xl text-gray-600 text-center'>Here you will find some of the personal projects that I created with each project containing its own case study</p>
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