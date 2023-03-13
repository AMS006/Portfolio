import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CaseStudyTobBar from '../components/CaseStudyTobBar';
import HomeLayout from '../layouts/Home.layouts'
import tiffinmanagment from '../images/tiffinmanagment-bg.png'
import zomatoclone from '../images/zomatoclone-bg.png'
import portfolio from '../images/portfolio-bg.png'
import bookmyshow from '../images/bookmyshow1-bg.png'
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
            overview:["Tiffin Managment System is a project which is build using MERN stack and made for the tiffin providers who can sell their tiffin service online and a user a buy a home made tiffin from those sellers","This website also contain admin dashboard for tiffin providers from where providers can manage there orders and tiffin services","A User on the website can search for the provider and can order tiffin from any provider and can also cancel the order before provider delivered the order"],
            tools:["React","MongoDB","ExpressJs","NodeJs","MaterialUI","TailwindCSS","Redux"],
            github:"https://github.com/AMS006/TiffinManagment",
            live:"https://tiffin-managment-client.vercel.app/",
            youtube:"https://www.youtube.com/watch?v=qdpHaTL_Yuw",
            image:tiffinmanagment
        },
        {
            id:'project-2',
            name:"Zomato Clone",
            overview:["Zomato Clone was the first MERN stack project build by me during training course of devtown. I have learned lots of technologies while building this website","While building this website I have also learned about Docker and kubernetes and the website is deployed on AWS EC2 Instance","For storing the Images I have used AWS S3 Bucket and state managment is done using Redux"],
            tools:["React","MongoDB","ExpressJs","NodeJs","MaterialUI","TailwindCSS","Redux"],
            github:"https://github.com/AMS006/Zomato-clone",
            youtube:"https://www.youtube.com/watch?v=SvYLn9451to",
            image:zomatoclone
        },
        {
            id:'project-3',
            name:"Portfolio",
            overview:["Portfolio is the website build my me for showcasing my all skills my all projects to everyone. It was a great experience for me while building this website","This portfolio website contains all details of my projects with overview and tools used in that project"],
            tools:["React","TailwindCSS","Github","Vercel"],
            github:"https://github.com/AMS006/Portfolio",
            live:"https://portfolio-orcin-seven-11.vercel.app/",
            image:portfolio
        },
        {
            id:'project-4',
            name:"Book My Show Clone",
            overview:["Book My Show Clone was the first complete website which I have build after learning complete React I have used MovieDB API for movies","It was a great experience for me while developing this website"],
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

export default HomeLayout(CaseStudePage)