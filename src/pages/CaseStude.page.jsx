import React from 'react'
import HomeLayout from '../layouts/Home.layouts'

function CaseStudePage() {
    const data = [
        {
            id:'project-1',
            name:"Tiffin Managment System",
            overview:["",""],
            tools:["React","MongoDB","ExpressJs","NodeJs","MaterialUI","TailwindCSS"],
            github:"https://github.com/AMS006/TiffinManagment",
            live:"https://github.com/AMS006/TiffinManagment"
        },
        {
            id:'project-2',
            name:"Zomato Clone",
            overview:["",""],
            tools:["React","MongoDB","ExpressJs","NodeJs","MaterialUI","TailwindCSS","Docker","AWS EC2 Instance"],
            github:"https://github.com/AMS006/Zomato-clone"
        },
        {
            id:'project-3',
            name:"Portfolio",
            overview:["",""],
            tools:["React","TailwindCSS","Github","Vercel"],
            github:"",
            live:""
        },
        {
            id:'project-4',
            name:"Book My Show Clone",
            overview:["",""],
            tools:["React","TailwindCSS","MovieDB API","Git","Github"],
            github:"",
            live:""
        }
    ]
  return (
    <div>
        
    </div>
  )
}

export default HomeLayout(CaseStudePage)