import React, { useContext } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiPrisma, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { AiFillGithub } from 'react-icons/ai'
import { ImGit } from 'react-icons/im'
import { UserContext } from '../UserContext'
import { motion } from 'framer-motion'

const leftTextVariants = {
    initial: {
        x: -500,
        y: 0,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};
const rightTextVariants = {
    initial: {
        x: 0,
        y: 300,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};
function Skills() {
    const { mode } = useContext(UserContext)
    const skills = [
        {
            name: "HTML",
            icon: <FaHtml5 />,
            link: "https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+html"
        },
        {
            name: "CSS",
            icon: <FaCss3Alt />,
            link: "https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+css"
        },
        {
            name: "JavaScript",
            icon: <FaJs />,
            link: "https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+javascript"
        },
        {
            name: "TypeScript",
            icon: <SiTypescript />,
            link: "https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+typescript"
        },
        {
            name: "ReactJs",
            icon: <FaReact />,
            link: "https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+reactjs"
        },
        {
            name: "NextJs",
            icon: <TbBrandNextjs />,
            link: "https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+nextjs"
        },
        {
            name: "NodeJs",
            icon: <FaNodeJs />,
            link: "https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+nodejs"
        },
        {
            name: "MongoDB",
            icon: <SiMongodb />,
            link: "https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+mongodb"
        },
        {
            name: "ExpressJs",
            icon: <SiExpress />,
            link: "https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+expressjs"
        },
        {
            name: "Prisma",
            icon: <SiPrisma />,
            link: "https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+prisma"
        },
        {
            name: "Java",
            icon: <FaJava />,
            link: "https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+java"
        },
        {
            name: "Git",
            icon: <ImGit />,
            link: "https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+git"
        },
        {
            name: "Github",
            icon: <AiFillGithub />,
            link: "https://search.yahoo.com/search?fr=mcafee&type=E211US714G0&p=what+is+github"
        }
    ]
    return (
        <div
            className={`${mode ? 'bg-slate-900 text-white' : ''}lg:px-20 md:px-10 px-3 flex lg:flex-row flex-col justify-between lg:gap-16 gap-10 py-10`}>
            <motion.div
                variants={leftTextVariants}
                initial='initial'
                whileInView={"animate"}
                viewport={{ once: true }}
                className='lg:w-1/2'>
                <motion.h2 variants={leftTextVariants} className={`${mode ? 'text-white ' : ''}text-3xl font-bold py-6`}>Get to know me!</motion.h2>
                <motion.div variants={leftTextVariants} className={`${mode ? 'text-white ' : ''}flex flex-col gap-3 py-3`}>
                    <p variants={leftTextVariants} className='text-lg'>I'm a <b>Full Stack Web Developer</b> building the Full Stack Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                    {/* <p className='text-lg text-gray-700'>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming</p> */}
                    <p variants={leftTextVariants} className='text-lg '>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                </motion.div>
                <motion.div variants={leftTextVariants} className='py-4'>
                    <a variants={leftTextVariants} href='#contact' className='px-6 shadow py-3 bg-blue-500 font-semibold text-xl text-white rounded'>Contact</a>
                </motion.div>
            </motion.div>
            <motion.div
                variants={rightTextVariants}
                initial='initial'
                whileInView={"animate"}
                viewport={{ once: true }}
                className='lg:w-1/2'>
                <motion.h2 className={`${mode ? 'text-white ' : ''}text-3xl font-bold py-6`}>Skills</motion.h2>
                <motion.div className='flex gap-4 flex-wrap'>
                    {skills.map((skill) => (
                        <motion.a href={skill.link} target={'_blank'} rel="noreferrer" className={`${mode ? 'text-white hover:bg-slate-600 ' : 'hover:bg-slate-200 '}flex gap-2 items-center shadow  transition-all duration-150 ease-in-out cursor-pointer justify-center border px-2 py-2 rounded-md`}>
                            <span className='text-xl'>{skill.icon}</span>
                            <span className='text-lg font-semibold'>{skill.name}</span>
                        </motion.a>
                    ))}

                </motion.div>
            </motion.div>
        </div>
    )
}

export default Skills