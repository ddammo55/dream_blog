import ContactForm from '@/components/ContactForm';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';


const LINKS = [
    {icon: <AiFillGithub/>, url:'https://github.com/ddammo55'},
    {icon: <AiFillYoutube/>, url:'https://www.youtube.com/channel/UCfNmwABiqqUqtQAZhRR6Qtg'},
]
export default function ContactPage() {
    return <section className='flex flex-col items-center gap-2'>
        <h2 className='text-3xl font-bold my-2'>Contact Me</h2>
        <p>laravel3899@gmail.cim</p>
        <ul className='flex gap-4 my-2'>
            {LINKS.map((link, index) => (
                <a href={link.url} key={index} target='_blank' rel='noreferrer' className='text-5xl hover:text-yellow-400'>
                  {link.icon}  
                </a>
            ))}
        </ul>
        <h2 className='text-3xl font-bold my-8'>Or Send me an email</h2>
        <ContactForm/>
    </section>
}


