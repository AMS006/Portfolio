import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import profile from '../images/profile.jpg'
import { UserContext } from '../UserContext'
import {BiArrowBack} from 'react-icons/bi'
function CaseStudyNavbar() {
    const {mode} = useContext(UserContext)
  return (
    <div className={`${mode?'bg-slate-800 text-white ':'bg-white '} flex justify-between sticky top-0 py-4 lg:px-10 md:px-4 px-2 shadow-md`}>
            <div className='flex gap-3 items-center justify-center'>
                <div className='h-12 w-12 overflow-hidden rounded-full'>
                    <img src={profile} alt="" className='w-full h-full overflow-hidden'/>
                </div>
                <div>
                    <h1 className='font-extrabold text-2xl font-mono'>ANAS SAIN</h1>
                </div>
            </div>
            <div className='flex items-center justify-center gap-10 font-bold font-mono text-lg'>
                <Link to={'/'} className='flex items-center text-xl gap-2'>
                    <BiArrowBack />
                    <span>Back</span>
                </Link>
            </div>
        </div>
  )
}

export default CaseStudyNavbar