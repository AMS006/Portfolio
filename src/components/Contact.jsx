import React from 'react'

function Contact() {
  return (
    <div className='bg-slate-100'>
        <div className='py-12 bg-slate-100 lg:px-20 md:px-10 px-3'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold inline-block py-2 tracking-widest border-b-4 border-blue-500'>CONTACT</h1>
                <p className='text-gray-600 text-lg py-4'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
            </div>
            <div className='w-full flex justify-center py-6'>
                <form action="" className='lg:w-3/5 md:w-4/5 w-11/12 bg-white rounded px-4 py-6 border shadow-lg flex flex-col gap-4'>
                    <div className='flex flex-col '>
                        <label htmlFor="name" className='font-bold py-1'>Name</label>
                        <input type="text" name="name" id="name" className='border px-4 py-2 rounded bg-gray-200 text-gray-800 font-semibold focus:outline-none ' placeholder='Enter Your Name'/>
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="email" className='font-bold py-1'>Email</label>
                        <input type="email" name="email" id="email" className='border px-4 py-2 rounded bg-gray-200 text-gray-800 font-semibold focus:outline-none ' placeholder='Enter Your Email' />
                    </div>
                    <div className='flex flex-col  '>
                        <label htmlFor="message" className='font-bold py-1'>Message</label>
                        <textarea name="" id="" cols="30" rows="9" className='border px-4 py-2 rounded bg-gray-200 text-gray-800 font-semibold focus:outline-none resize-none' placeholder='Enter Your Message'></textarea>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact