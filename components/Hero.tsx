import React from 'react';
import Image from 'next/image';
import profileImage from '../public/images/profile.jpg';
import Link from 'next/link';

export default function Hero() {
    return <section className='text-center'>
            <Image className='mx-auto rounded-full border-4 border-gray-300' width={120} height={120} src={profileImage} alt="profile" />
            <h2 className='text-3xl font-bold mt-2'>{"개발공부하는 남자"}</h2>
            <h3 className='text-sm'>NEXTJS, NODE, JSVASCRIPT</h3>
            <Link href='/contact'>
                <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mb-5 mt-2 hover:bg-yellow-400'>Contact Me</button>
            </Link>
            <hr/>
    </section>
}

