import React from 'react'

export default function LogoNav() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-4 py-4 px-6 space-x-24'>
            <div className=' w-40 mx-auto col-span-1'>
                <a href='/'><img src={process.env.PUBLIC_URL + 'output-onlinepngtools.png'} alt='572-768x591' /></a>
            </div>
            <div className='col-span-3 flex items-center'>
                <a className='hidden sm:flex h-20' href='/'>
                    <img src={process.env.PUBLIC_URL + '1.jpg'} alt="1" />
                </a>
            </div>
        </div>
    )
}
