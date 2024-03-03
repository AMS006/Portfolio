import React from 'react'
import { FiDownload } from 'react-icons/fi'
function Download() {

  return (
    <div className='fixed bottom-5 sm:right-8 right-4 shadow-lg rounded-full py-3 px-6 bg-blue-600 text-xl font-semibold text-white'>
      <a className='flex items-center gap-2' rel="noreferrer" href='https://drive.google.com/file/d/1x971m9LuICjFpFK3UongttTGuJvP2vIu/view?usp=drive_link' target={'_blank'}>
        <FiDownload /> My Resume</a>
    </div>
  )
}

export default Download