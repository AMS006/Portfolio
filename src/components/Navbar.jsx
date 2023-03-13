import React, {useContext, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import profile from '../images/profile.jpg'
import { UserContext } from '../UserContext'
function NavbarLg() {
    const {mode} = useContext(UserContext)
    return(
        <div className={`${mode?'bg-slate-800 text-white ':'bg-white '} flex justify-between py-4 lg:px-10 md:px-4 px-2 shadow-md`}>
            <div className='flex gap-3 items-center justify-center'>
                <div className='h-12 w-12 overflow-hidden rounded-full'>
                    <img src={profile} alt="" className='w-full h-full overflow-hidden'/>
                </div>
                <div>
                    <h1 className='font-extrabold text-2xl font-mono'>ANAS SAIN</h1>
                </div>
            </div>
            <div className='flex items-center justify-center gap-10 font-bold font-mono text-lg'>
                <div>
                    <a href="#home">HOME</a>
                </div>
                <div>
                    <a href="#about">ABOUT</a>
                </div>
                <div>
                    <a href="#projects">PROJECTS</a>
                </div>
                <div>
                    <a href="#contact">CONTACT</a>
                </div>
            </div>
        </div>
    )
}
function NavbarSm(){
    const [isOpen,setIsOpen] = useState(false)
    const {mode} = useContext(UserContext)
    return(
        <>
            <div className={`${mode?'bg-slate-800 text-white ':' '}flex justify-between shadow px-4 py-2 items-center relative`}>
                <div className='flex gap-3 items-center justify-center'>
                    <div className='h-12 w-12 overflow-hidden rounded-full'>
                        <img src={profile} alt="" className='w-full h-full overflow-hidden'/>
                    </div>
                    <div>
                        <h1 className='font-extrabold text-xl font-mono'>ANAS SAIN</h1>
                    </div>
                </div>
                <div className='text-3xl cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                    <FaBars />
                </div>
            </div>
            <div className={`${mode?'bg-slate-700 text-white ':'bg-white '} flex flex-col items-center absolute top-16 z-10 w-full justify-center gap-6 font-bold font-mono text-lg py-3 transition ease-in-out duration-500 ${isOpen?'translate-x-0':'-translate-x-full'}`}>
                <div>
                    <a href="#home" onClick={() => setIsOpen(!isOpen)}>HOME</a>
                </div>
                <div>
                    <a href="#about" onClick={() => setIsOpen(!isOpen)}>ABOUT</a>
                </div>
                <div>
                    <a href="#projects" onClick={() => setIsOpen(!isOpen)}>PROJECTS</a>
                </div>
                <div>
                    <a href="#contact" onClick={() => setIsOpen(!isOpen)}>CONTACT</a>
                </div>
            </div>
        </>
    )
}
function Navbar() {
    const {mode} = useContext(UserContext)
  return (
    <>
        <div className={`${mode ? 'bg-slate-800 text-white ':'bg-white '} md:hidden block sticky top-0  z-10`}>
            <NavbarSm />
        </div>
        <div className={`md:block hidden sticky top-0 bg-white z-10`}>
            <NavbarLg />
        </div>
    </>
  )
}

export default Navbar