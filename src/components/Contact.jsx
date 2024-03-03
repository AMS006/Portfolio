import React, { useContext, useState } from 'react'
import { send } from 'emailjs-com'
import { UserContext } from '../UserContext';
import { motion } from 'framer-motion';

const variants = {
    initial: {
        x: 0,
        y: 200,
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

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const { mode } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, message)
        const toSend = {
            from_name: name,
            reply_to: email,
            to_name: 'Anas',
            message
        }
        send(
            'service_2va4lnf',
            'template_ohsduym',
            toSend,
            'J3k6_m6TXQ91y-tAT'
        )
        setName("")
        setEmail("")
        setMessage("")
        window.alert("Thank You for contacting with me")
    }
    return (
        <div className={`${mode ? 'bg-slate-900 text-white' : 'bg-slate-100 '}`} id='contact'>
            <div className='py-12  lg:px-20 md:px-10 px-3'>
                <motion.div
                    variants={variants}
                    initial='initial'
                    whileInView={"animate"}
                    viewport={{ once: true }}
                    className='text-center'>
                    <h1 className='text-4xl font-bold inline-block py-2 tracking-widest border-b-4 border-blue-500'>CONTACT</h1>
                    <p className={`${mode ? 'text-white ' : 'text-gray-600 '} text-lg py-4`}>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
                </motion.div>
                <div className='w-full flex justify-center py-6'>
                    <motion.form
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        viewport={{ once: true }}
                        className={`${mode ? 'bg-zinc-600 ' : ''}lg:w-3/5 md:w-4/5 w-11/12 rounded px-4 py-6 border shadow-lg flex flex-col gap-4`} onSubmit={handleSubmit}>
                        <div className='flex flex-col '>
                            <label htmlFor="name" className='font-bold py-1'>Name</label>
                            <input type="text" value={name} name="name" id="name" className='border px-4 py-2 rounded bg-gray-200 text-gray-800 font-semibold focus:outline-none ' placeholder='Enter Your Name' required onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="email" className='font-bold py-1'>Email</label>
                            <input type="email" value={email} name="email" id="email" className='border px-4 py-2 rounded bg-gray-200 text-gray-800 font-semibold focus:outline-none ' placeholder='Enter Your Email' required onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='flex flex-col  '>
                            <label htmlFor="message" className='font-bold py-1'>Message</label>
                            <textarea name="" value={message} id="message" cols="30" rows="9" className='border px-4 py-2 rounded bg-gray-200 text-gray-800 font-semibold focus:outline-none resize-none' placeholder='Enter Your Message' required onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        <div className='flex justify-end'>
                            <input type="submit" value="Submit" className='px-12 rounded cursor-pointer py-2 bg-blue-500 text-white font-bold' />
                        </div>
                    </motion.form>
                </div>
            </div>
        </div>
    )
}

export default Contact