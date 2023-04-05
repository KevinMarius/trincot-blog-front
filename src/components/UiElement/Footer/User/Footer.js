import React, { useState, useEffect } from 'react'
import { FaEnvelope } from 'react-icons/fa';
import { useHttpClient } from '../../../../hooks/http-hook';

export default function Footer() {
    const [categories, setCategories] = useState([]);
    const { isLoading, sendRequest, error, clearError } = useHttpClient();

    useEffect(() => {
        const getPostsData = async () => {
          await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/category/get`)
            .then((response) => {
              setCategories(response.categories);
            })
        }
        getPostsData();
      }, [sendRequest]);

    return (
        <div className='grid grid-cols-4 w-[100%] px-6 pb-7 bg-zinc-800 text-gray-200'>
            <div className='col-span-full md:col-span-2 lg:col-span-1'>
                <div className=' mt-10 mx-3'>
                    <a href='/'><img className='w-[80%] mx-auto' src={process.env.PUBLIC_URL + 'output-onlinepngtools.png'} alt='572-768x591' /></a>
                    <p className='text-white text-sm font-medium'>You can also use variant modifiers to target media queries like responsive breakpoints. You can also use variant modifiers.</p>
                </div>
            </div>
            <div className='col-span-full md:col-span-2 lg:col-span-1 px-2 pt-6'>
                <h4 className='text-zinc-300 text-xl font-alata py-4'>
                    Categories
                </h4>
                <div className='block'>
                    <ul className='ml-10'>
                        {categories.map((item) => (
                            <a href='/' className='py-2 text-sm font-semibold font-alata hover:no-underline hover:text-purple-500' key={item._id}>
                                <li className='list-disc my-3'>{item.title}</li>
                            </a>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='col-span-full md:col-span-2 lg:col-span-1 px-2 pt-6'>
                <h4 className='text-zinc-300 text-xl font-alata py-4'>
                    Tags
                </h4>
                <div className='grid gap-1 grid-cols-4'>
                    <div className=' col-span-2 border rounded-sm border-zinc-500 px-1 py-1'>
                        <a href='/' className='text-white hover:text-purple-500 hover:no-underline text-sm font-semibold'>phone</a>
                    </div>
                    <div className=' col-span-2 border rounded-sm border-zinc-500 px-1 py-1'>
                        <a href='/' className='text-white hover:text-purple-500 hover:no-underline text-sm font-semibold'>Football</a>
                    </div>
                    <div className=' col-span-2 border rounded-sm border-zinc-500 px-1 py-1'>
                        <a href='/' className='text-white hover:text-purple-500 hover:no-underline text-sm font-semibold'>programmation</a>
                    </div>
                    <div className=' col-span-2 border rounded-sm border-zinc-500 px-1 py-1'>
                        <a href='/' className='text-white hover:text-purple-500 hover:no-underline text-sm font-semibold'>sport</a>
                    </div>
                    <div className=' col-span-2 border rounded-sm border-zinc-500 px-1 py-1'>
                        <a href='/' className='text-white hover:text-purple-500 hover:no-underline text-sm font-semibold'>divers</a>
                    </div>
                    <div className=' col-span-2 border rounded-sm border-zinc-500 px-1 py-1'>
                        <a href='/' className='text-white hover:text-purple-500 hover:no-underline text-sm font-semibold'>phone</a>
                    </div>
                    <div className=' col-span-2 border rounded-sm border-zinc-500 px-1 py-1'>
                        <a href='/' className='text-white hover:text-purple-500 hover:no-underline text-sm font-semibold'>phone</a>
                    </div>
                </div>
            </div>
            <div className='col-span-full md:col-span-2 lg:col-span-1 px-2 pt-6'>
                <h4 className='text-zinc-300 text-xl font-alata py-4'>
                    Newsletter
                </h4>
                <div className='flex'>
                    <div className='bg-zinc-800 w-14 flex rounded-l-md items-center border border-l-zinc-500 border-t-zinc-500 border-b-zinc-500 border-r-zinc-800'>
                        <FaEnvelope className='h-5 w-[100%] px-2 text-zinc-500' />
                    </div>
                    <div className="relative w-full">
                        <input type="text" placeholder="Enter your email address" id="simple-search" className="bg-zinc-800 border border-l-zinc-800 border-t-zinc-500 focus:outline-none border-b-zinc-500 border-r-zinc-500 border-zinc-500 placeholder:text-xs text-white text-sm rounded-r-md block w-[100%] pl-2 p-2.5" required />
                    </div>
                </div>
                <button className='w-[100%] rounded-md mt-3 py-2 bg-purple-500 text-md hover:bg-purple-700 font-semibold'>Suscribe</button>
            </div>
        </div>
    )
}
