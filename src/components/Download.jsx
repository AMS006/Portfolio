import React from 'react'
import {FiDownload} from 'react-icons/fi'
function Download() {

  return (
    <div className='fixed bottom-5 sm:right-8 right-4 shadow-lg rounded-full py-3 px-6 bg-blue-600 text-xl font-semibold text-white'>
        <a className='flex items-center gap-2' rel="noreferrer" href='https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:2f210dad-8388-35ce-9079-642246ba42fa' target={'_blank'}>
           <FiDownload /> My Resume</a>
    </div>
  )
}

export default Download