import React from 'react';
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaUserCircle } from 'react-icons/fa';

export default function FirstNav(props) {
    return (
        <div className='bg-zinc-800 py-1'>
            <div className='w-[100%] px-6'>
                <nav className='flex justify-between text-white'>
                    <button onClick={props.handleOpenClick} className='md:hidden'><FaBars /></button>
                    <div className="hidden h-15 md:flex font-alata items-center space-x-4">
                        <a className='hover:text-purple-500' href='about'>About</a>
                        <a className='hover:text-purple-500' href='blog'>Blog</a>
                        <a className='hover:text-purple-500' href='contact'>Contact</a>
                    </div>
                    <div className='flex items-center justify-between'>
                        <a className='px-1' href='/'><FaFacebook /></a>
                        <a className='px-1' href='/'><FaInstagram /></a>
                        <a className='px-1' href='/'><FaTwitter /></a>
                        <a className='px-1' href='/'><FaLinkedin /></a>
                        <a className='px-3' href='/signIn'><FaUserCircle /></a>
                    </div>
                </nav>
            </div>
        </div>
    )
}
