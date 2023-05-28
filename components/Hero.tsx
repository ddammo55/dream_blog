import React from 'react';
import Image from 'next/image';
import profileImage from '../public/images/profile.jpg';
import Link from 'next/link';

export default function Hero() {
    return <section className='text-center'>
            <Image className='mx-auto rounded-full' width={250} height={250} src={profileImage} alt="profile" />
            <h2 className='text-3xl font-bold mt-2'>{"Hi, I'm a developer"}</h2>
            <h3>풀스택개발자</h3>
            <p>코딩하는 꿈을 포기하지 않겠어요</p>
            <Link href='/contact'>
                <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>Contact Me</button>
            </Link>
    </section>
}

