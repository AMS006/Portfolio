import React from 'react'
import {FiDownload} from 'react-icons/fi'
function Download() {

  return (
    <div className='fixed bottom-5 sm:right-8 right-4 shadow-lg rounded-full py-3 px-6 bg-blue-600 text-xl font-semibold text-white'>
        <a className='flex items-center gap-2' href='https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:7906fa72-d299-3592-b34d-dbf52f080f50' target={'_blank'}>
           <FiDownload /> My Resume</a>
    </div>
  )
}

export default Download