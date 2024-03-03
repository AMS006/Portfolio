import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import profile from '../images/profile.jpg'


import { MenuToggle } from './MenuToggle'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext'

const variants = {
    open: {
        clipPath: "circle(1200px at calc(100% - 45px) 40px)",
        transition: {
            type: "spring",
            stiffness: 20,
        },
    },
    closed: {
        clipPath: "circle(30px at calc(100% - 45px) 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const { mode } = useContext(UserContext)

    return (
        <motion.div
            animate={isOpen ? "open" : "closed"}
            className={`${mode ? 'bg-slate-800 text-white ' : 'bg-white '}`}

        >
            <Link to={'/'} className='flex gap-3 items-center justify-start px-6 py-4'>
                <div className='h-12 w-12 overflow-hidden rounded-full'>
                    <img src={profile} alt="" className='w-full h-full overflow-hidden' />
                </div>
                <div>
                    <h1 className='font-extrabold text-2xl font-mono'>ANAS SAIN</h1>
                </div>
            </Link>
            <motion.div className={`fixed top-0 right-0 bottom-0 z-40  w-[300px] ${mode ? 'bg-white text-[#1e293b]' : 'bg-[#1e293b] text-white'}`} variants={variants}>
                <Sidebar open={isOpen} setIsOpen={setIsOpen} />
            </motion.div>
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </motion.div>
    )
}

export default Navbar