import React, { useContext } from 'react'
import {FaHtml5,FaCss3Alt,FaJs,FaReact,FaNodeJs,FaJava} from 'react-icons/fa'
import {SiMongodb,SiMysql,SiExpress} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'
import {ImGit} from 'react-icons/im'
import { UserContext } from '../UserContext'
function Skills() {
    const {mode} = useContext(UserContext)
    const skills = [
        {
            name:"HTML",
            icon:<FaHtml5 />,
            link:"https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+html"
        },
        {
            name:"CSS",
            icon:<FaCss3Alt />,
            link:"https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+css"
        },
        {
            name:"JavaScript",
            icon:<FaJs />,
            link:"https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+javascript"
        },
        {
            name:"React",
            icon:<FaReact />,
            link:"https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+react"
        },
        {
            name:"NodeJs",
            icon:<FaNodeJs />,
            link:"https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+nodejs"
        },
        {
            name:"MongoDB",
            icon:<SiMongodb />,
            link:"https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+mongodb"
        },
        {
            name:"ExpressJs",
            icon:<SiExpress />,
            link:"https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+expressjs"
        },
        {
            name:"Java",
            icon:<FaJava />,
            link:"https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+java"
        },
        {
            name:"MySql",
            icon:<SiMysql />,
            link:"https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+mysql"
        },
        {
            name:"Git",
            icon:<ImGit />,
            link:"https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+git"
        },
        {
            name:"Github",
            icon:<AiFillGithub />,
            link:"https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+github"
        }
    ]
  return (
    <div className={`${mode?'bg-slate-900 text-white':''}lg:px-20 md:px-10 px-3 flex lg:flex-row flex-col justify-between lg:gap-16 gap-10 py-10`}>
        <div className='lg:w-1/2'>
            <h2 className={`${mode ? 'text-white ':''}text-3xl font-bold py-6`}>Get to know me!</h2>
            <div className={`${mode?'text-white ':''}flex flex-col gap-3 py-3`}>
                <p className='text-lg'>I'm a <b>Full Stack Web Developer</b> building the Full Stack Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                {/* <p className='text-lg text-gray-700'>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming</p> */}
                <p className='text-lg '>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
            </div>
            <div className='py-4'>
                <a href='#contact' className='px-6 shadow py-3 bg-blue-500 font-semibold text-xl text-white rounded'>Contact</a>
            </div>
        </div>
        <div className='lg:w-1/2'>
            <h2 className={`${mode?'text-white ':''}text-3xl font-bold py-6`}>Skills</h2>
            <div className='flex gap-4 flex-wrap'>
                {skills.map((skill) =>(
                    <a href={skill.link} target={'_blank'} className={`${mode?'text-white hover:bg-slate-600 ':'hover:bg-slate-200 '}flex gap-2 items-center shadow  transition-all duration-150 ease-in-out cursor-pointer justify-center border px-2 py-2 rounded-md`}>
                        <span className='text-xl'>{skill.icon}</span>
                        <span className='text-lg font-semibold'>{skill.name}</span>
                    </a>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Skills