import React, { useContext } from 'react'
import {MdOutlineDarkMode,MdOutlineLightMode} from 'react-icons/md'
import { UserContext } from '../UserContext';
function ModeChange() {
    const {mode,setMode} = useContext(UserContext)

  return (
    <div className='fixed bottom-20 p-2 border cursor-pointer border-gray-400 shadow-lg rounded-full  text-2xl left-0 z-10 flex items-center gap-3' style={{borderRadius:'0px 50% 50% 0px'}} onClick={() => setMode(!mode)}>
        {mode ?<div className='bg-white p-2 text-slate-700 rounded-full'>
            <MdOutlineLightMode />
        </div>:
        <div className='bg-slate-700 p-2 text-white rounded-full'>
            <MdOutlineDarkMode />
        </div>}
    </div>
  )
}

export default ModeChange;