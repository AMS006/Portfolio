import React from 'react'
import {FaHtml5,FaCss3Alt,FaJs,FaReact,FaNodeJs,FaJava} from 'react-icons/fa'
import {SiMongodb,SiMysql,SiExpress} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'
import {ImGit} from 'react-icons/im'
function Skills() {
  return (
    <div className='lg:px-20 md:px-10 px-3 flex lg:flex-row flex-col justify-between lg:gap-16 gap-10 py-10'>
        <div className='lg:w-1/2'>
            <h2 className='text-3xl font-bold py-6'>Get to know me!</h2>
            <div className='flex flex-col gap-3 py-3'>
                <p className='text-lg text-gray-700'>I'm a <b>Full Stack Web Developer</b> building the Full Stack Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                <p className='text-lg text-gray-700'>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming</p>
                <p className='text-lg text-gray-700'>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
            </div>
            <div className='py-4'>
                <button className='w-36 shadow py-3 bg-blue-500 font-semibold text-xl text-white rounded'>Contact</button>
            </div>
        </div>
        <div className='lg:w-1/2'>
            <h2 className='text-3xl font-bold py-6 '>Skills</h2>
            <div className='flex gap-4 flex-wrap'>
                <div className='flex gap-2 items-center shadow hover:bg-slate-200 transition-all duration-150 ease-in-out cursor-pointer justify-center border px-2 py-2 rounded-md'>
                    <span className='text-xl'><FaHtml5 /></span>
                    <span className='text-lg font-semibold'>HTML</span>
                </div>
                <div className='flex gap-2 items-center shadow hover:bg-slate-200 transition-all duration-150 ease-in-out cursor-pointer justify-center border px-2 py-2 rounded-md'>
                    <span className='text-xl'><FaCss3Alt /></span>
                    <span className='text-lg font-semibold'>CSS</span>
                </div>
                <div className='flex gap-2 items-center shadow hover:bg-slate-200 transition-all duration-150 ease-in-out cursor-pointer justify-center border px-2 py-2 rounded-md'>
                    <span className='text-xl'><FaJs /></span>
                    <span className='text-lg font-semibold'>Javascript</span>
                </div>
                <div className='flex gap-2 items-center shadow hover:bg-slate-200 transition-all duration-150 ease-in-out cursor-pointer justify-center border px-2 py-2 rounded-md'>
                    <span className='text-xl'><FaReact /></span>
                    <span className='text-lg font-semibold'>React</span>
                </div>
                <div className='flex gap-2 items-center shadow hover:bg-slate-200 transition-all duration-150 ease-in-out cursor-pointer justify-center border px-2 py-2 rounded-md'>
                    <span className='text-xl'><FaNodeJs /></span>
                    <span className='text-lg font-semibold'>NodeJs</span>
                </div>
                <div className='flex gap-2 items-center shadow hover:bg-slate-200 transition-all duration-150 ease-in-out cursor-pointer justify-center border px-2 py-2 rounded-md'>
                    <span className='text-xl'><SiMongodb /></span>
                    <span className='text-lg font-semibold'>MongoDB</span>
                </div>
                <div className='flex gap-2 items-center shadow hover:bg-slate-200 transition-all duration-150 ease-in-out cursor-pointer justify-center border px-2 py-2 rounded-md'>
                    <span className='text-xl'><SiExpress /></span>
                    <span className='text-lg font-semibold'>ExpressJs</span>
                </div>
                <div className='flex gap-2 items-center shadow hover:bg-slate-200 transition-all duration-150 ease-in-out cursor-pointer justify-center border px-2 py-2 rounded-md'>
                    <span className='text-xl'><FaJava /></span>
                    <span className='text-lg font-semibold'>Java</span>
                </div>
                <div className='flex gap-2 items-center shadow hover:bg-slate-200 transition-all duration-150 ease-in-out cursor-pointer justify-center border px-2 py-2 rounded-md'>
                    <span className='text-xl'><SiMysql /></span>
                    <span className='text-lg font-semibold'>MySQL</span>
                </div>
                <div className='flex gap-2 items-center shadow hover:bg-slate-200 transition-all duration-150 ease-in-out cursor-pointer justify-center border px-2 py-2 rounded-md'>
                    <span className='text-xl'><ImGit /></span>
                    <span className='text-lg font-semibold'>Git</span>
                </div>
                <div className='flex gap-2 items-center shadow hover:bg-slate-200 transition-all duration-150 ease-in-out cursor-pointer justify-center border px-2 py-2 rounded-md'>
                    <span className='text-xl'><AiFillGithub /></span>
                    <span className='text-lg font-semibold'>Github</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills