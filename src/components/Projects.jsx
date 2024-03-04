import React, { useContext } from 'react'
import talksmessenger from '../images/TMImg.png'
import airbnb from '../images/AirBnbImg.png'
import tiffinmanagment from '../images/tiffinmanagment-bg.png'
import zomatoclone from '../images/zomatoclone-bg.png'
import portfolio from '../images/portfolio-bg.png'
import bookmyshow from '../images/bookmyshow1-bg.png'
import ProjectCard from './ProjectCard'
import { UserContext } from '../UserContext'
const projects = [
  {
    image: talksmessenger,
    id: "project-1",
    name: "Talks Messenger",
    overview: "Talks Messenger is build using NextJs is a real time chat application where user can do one to one conversation, group conversation through text and can send or receive images"
  },
  {
    image: tiffinmanagment,
    id: "project-2",
    name: "Tiffin Managment System",
    overview: "Tiffin Managment System is build using MERN stack where tiffin providers can sell their tiffin service online and a user can buy a home made tiffin from those sellers"
  },
  {
    image: airbnb,
    id: "project-3",
    name: "AirBnb Clone",
    overview: "AirBnbClone is a basic Clone website which is build using MERN stack from where a user can buy book a accomodation, and can also add a accomodation for sell "
  },
  {
    image: zomatoclone,
    id: "project-4",
    name: "Zomato Clone",
    overview: "Zomato Clone was the first MERN stack project build by me during training course of devtown. I have learned lots of technologies while building this website"
  },
  {
    image: portfolio,
    id: "project-5",
    name: "My Portfolio",
    overview: "Portfolio is the website build my me for showcasing my all skills my all projects to everyone. It was a great experience for me while building this website"
  },
  {
    image: bookmyshow,
    id: "project-6",
    name: "Book My Show Clone",
    overview: "Book My Show Clone was the first complete website which I have build after learning complete React I have used MovieDB API for movies"
  }
]
function Projects() {
  const { mode } = useContext(UserContext)

  return (
    <div className={`${mode ? 'bg-slate-900 text-white ' : ''}py-8 lg:px-20 md:px-10 px-4`} id='projects'>
      <div className='flex justify-center relative'>
        <h1 className='text-4xl font-extrabold inline-block text-center tracking-widest font-mono border-b-4 py-2 border-blue-500'>PROJECTS</h1>

      </div>
      <div className='flex justify-center py-6'>
        <p className={`${mode ? 'text-white ' : ''}text-xl text-gray-600 text-center`}>Here you will find some of the personal projects that I created with each project containing its own case study</p>
      </div>
      <div>
        {projects.map((project) => (


          <ProjectCard key={project.id} project={project} />

        ))}
      </div>
    </div>
  )
}

export default Projects