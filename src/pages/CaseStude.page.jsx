import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CaseStudyTobBar from '../components/CaseStudyTobBar';
import HomeLayout from '../layouts/Home.layouts'
import tiffinmanagment from '../images/tiffinmanagment.jpg'
import zomatoclone from '../images/zomatoclone.jpg'
import portfolio from '../images/portfolio.jpg'
import bookmyshow from '../images/bookmyshow1.jpg'
import CaseStudeOverview from '../components/CaseStudeOverview';

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
            overview:["",""],
            tools:["React","MongoDB","ExpressJs","NodeJs","MaterialUI","TailwindCSS","Redux"],
            github:"https://github.com/AMS006/TiffinManagment",
            live:"https://tiffin-managment-client.vercel.app/",
            image:tiffinmanagment
        },
        {
            id:'project-2',
            name:"Zomato Clone",
            overview:["",""],
            tools:["React","MongoDB","ExpressJs","NodeJs","MaterialUI","TailwindCSS","Redux"],
            github:"https://github.com/AMS006/Zomato-clone",
            image:zomatoclone
        },
        {
            id:'project-3',
            name:"Portfolio",
            overview:["",""],
            tools:["React","TailwindCSS","Github","Vercel"],
            github:"https://github.com/AMS006/Portfolio",
            live:"",
            image:portfolio
        },
        {
            id:'project-4',
            name:"Book My Show Clone",
            overview:["",""],
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
        <CaseStudyTobBar project={project}/>
        <CaseStudeOverview project={project} />
    </div>
  )
}

export default HomeLayout(CaseStudePage)