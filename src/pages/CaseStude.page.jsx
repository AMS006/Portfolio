import React from 'react'
import { useParams } from 'react-router-dom'
import CaseStudyTobBar from '../components/CaseStudyTobBar';
import tiffinmanagment from '../images/tiffinmanagment-bg.png'
import zomatoclone from '../images/zomatoclone-bg.png'
import portfolio from '../images/portfolio-bg.png'
import bookmyshow from '../images/bookmyshow1-bg.png'
import CaseStudeOverview from '../components/CaseStudeOverview';
import CaseStudyLayout from '../layouts/CaseStudy.layout';

function CaseStudePage() {

    window.addEventListener('load',handleload())
    function handleload(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    
    const data = [
        {
            id:'project-1',
            name:"Tiffin Managment System",
            overview:["The MERN stack was used to build the Tiffin Management System, which was created for tiffin suppliers who may offer their services online and allow users to purchase homemade tiffins from those sellers.","Additionally, this website has an admin panel where tiffin suppliers may manage their orders and tiffin services.","The website allows users to browse for providers, order tiffin from any source, and cancel orders before they are delivered."],
            tools:["React","MongoDB","ExpressJs","NodeJs","MaterialUI","TailwindCSS","Redux"],
            github:"https://github.com/AMS006/TiffinManagment",
            live:"https://tiffin-managment-client.vercel.app/",
            youtube:"https://www.youtube.com/watch?v=qdpHaTL_Yuw",
            image:tiffinmanagment
        },
        {
            id:'project-2',
            name:"Zomato Clone",
            overview:["My first MERN stack project during the Devtown training programme was Zomato Clone. I gained a lot of technological knowledge while creating this website.","The website is hosted on an AWS EC2 instance, and I learned about Docker and Kubernetes while developing it.","I utilised an AWS S3 bucket for storing the images, and Redux is used for state management."],
            tools:["React","MongoDB","ExpressJs","NodeJs","MaterialUI","TailwindCSS","Redux"],
            github:"https://github.com/AMS006/Zomato-clone",
            youtube:"https://www.youtube.com/watch?v=SvYLn9451to",
            image:zomatoclone
        },
        {
            id:'project-3',
            name:"Portfolio",
            overview:["The website I created for my portfolio allows me to show off all of my abilities and completed projects. I had a wonderful experience creating this website.","My portfolio website includes a complete list of my projects, along with an overview and the tools I used for each one."],
            tools:["React","TailwindCSS","Github","Vercel"],
            github:"https://github.com/AMS006/Portfolio",
            live:"https://portfolio-orcin-seven-11.vercel.app/",
            image:portfolio
        },
        {
            id:'project-4',
            name:"Book My Show Clone",
            overview:["Book My Show Clone was the first fully functional website I created after learning React. I used the MovieDB API for movies.","When creating this website, it was a wonderful learning experience for me."],
            tools:["React","TailwindCSS","MovieDB API","Git","Github","Redux"],
            github:"https://github.com/AMS006/BookMyShow-clone-",
            live:"https://book-my-show-clone-mu.vercel.app/",
            image:bookmyshow
        }
    ]
    const pId = useParams().id;
    const project = data.find((item) => item.id === pId);
    
  return (
    <div>
        <CaseStudyTobBar project={project} />
        <CaseStudeOverview project={project} />
    </div>
  )
}

export default CaseStudyLayout(CaseStudePage)