import Link from 'next/link';
import React from 'react';

export default function Header() {
    return (
        <header className='flex justify-between items-center p-5'>
            <Link href="/">
                <h1 className='text-3xl font-bold cursor-pointer'>{"Wonho's Blog"}</h1>
            </Link>

            <nav className='space-x-5 text-lg font-medium'>
                <Link href="/">home</Link>
                <Link href="/about">about</Link>
                <Link href="/posts">posts</Link>
                <Link href="/contact">contact</Link>
            </nav>
        </header>
    );
}

