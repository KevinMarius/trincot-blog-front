import React from 'react'
import { FaComment, FaClock } from 'react-icons/fa';

export default function TopMain() {
    return (
        <div className='grid grid-cols-4 grid-rows-2 w-[100%] pt-4 px-6 gap-1 my-4'>
            <div className='col-span-full group row-span-1 md:hover:bg-blend-screen md:row-span-2 relative md:col-span-2'>
                <h6 className='text-xl text-white absolute z-10 m-3 px-3 py-1 font-medium bg-purple-600 rounded-tl-md rounded-br-md'>Mercato</h6>
                <h4 className='absolute bottom-12 md:group-hover:bottom-28 transition-all duration-500 left-6 font-semibold text-xl text-white z-10'>Transfert de Mbappe</h4>
                <p className='text-white z-0 md:group-hover:bottom-16 absolute transition-all duration-500 bottom-4 left-6 group-hover:z-10 text-sm'>You can also use variant modifiers to target media queries like responsive breakpoints</p>
                <div className='absolute bottom-0 md:group-hover:bottom-20 transition-all duration-500 left-6 group-hover:z-10 z-0 w-64'>
                    <div className='flex justify-between'>
                        <div className='flex justify-between items-center w-24'>
                            <FaComment className='text-white items-center' />
                            <p className=" text-slate-200">Comment</p>
                        </div>
                        <div className='flex justify-between items-center w-28'>
                            <FaClock className='text-white items-center' />
                            <p className=" text-slate-200">8 hours ago</p>
                        </div>
                    </div>
                </div>
                <div className='duration-300 h-full bg-blend-lighten md:hover:bg-blend-darken'>
                    <img className='object-cover bg-blend-lighten md:hover:bg-blend-darken h-full transform duration-300' src={process.env.PUBLIC_URL + 'max-lissenden-tJxu4j4-T4o-unsplash.jpg'} alt="1" />
                </div>
            </div>
            <div className='col-span-full group md:col-span-1 md:row-span-1 relative h-full'>
                <h6 className='text-xl text-white absolute z-10 m-3 px-3 py-1 font-medium bg-purple-600 rounded-tl-md rounded-br-md'>Mercato</h6>
                <h4 className='absolute bottom-12 md:group-hover:bottom-24 transition-all duration-500 left-2 font-semibold text-xl text-white z-10'>Transfert de Mbappe</h4>
                <div className='z-0 md:group-hover:bottom-7 absolute transition-all duration-500 bottom-0 left-2 group-hover:z-10 w-52'>
                    <div className='flex md:flex-col lg:flex-row justify-between'>
                        <div className='flex justify-between items-center w-20'>
                            <FaComment className='text-white items-center' />
                            <p className=" text-slate-200">Comment</p>
                        </div>
                        <div className='flex justify-between items-center w-28'>
                            <FaClock className='text-white items-center' />
                            <p className=" text-slate-200">8 hours ago</p>
                        </div>
                    </div>
                </div>
                <div className='duration-300 h-full bg-blend-lighten md:hover:bg-blend-darken'>
                    <img className='object-cover bg-blend-lighten md:hover:bg-blend-darken h-full transform duration-300' src={process.env.PUBLIC_URL + 'eilis-garvey-4x6aA37sMPg-unsplash.jpg'} alt="1" />
                </div>
            </div>
            <div className='col-span-full group md:col-span-1 md:row-span-1 relative h-full'>
                <h6 className='text-xl text-white absolute z-10 m-3 px-3 py-1 font-medium bg-purple-600 rounded-tl-md rounded-br-md'>Mercato</h6>
                <h4 className='absolute bottom-12 md:group-hover:bottom-24 transition-all duration-500 left-2 font-semibold text-xl text-white z-10'>Transfert de Mbappe</h4>
                <div className='z-0 md:group-hover:bottom-7 absolute transition-all duration-500 bottom-0 left-2 group-hover:z-10 w-52'>
                    <div className='flex md:flex-col lg:flex-row justify-between'>
                        <div className='flex justify-between items-center w-20'>
                            <FaComment className='text-white items-center' />
                            <p className=" text-slate-200">Comment</p>
                        </div>
                        <div className='flex justify-between items-center w-28'>
                            <FaClock className='text-white items-center' />
                            <p className=" text-slate-200">8 hours ago</p>
                        </div>
                    </div>
                </div>
                <div className='duration-300 h-full bg-blend-lighten md:hover:bg-blend-darken'>
                    <img className='object-cover bg-blend-lighten md:hover:bg-blend-darken h-full transform duration-300' src={process.env.PUBLIC_URL + 'hi-estudio-EJujExKf0-o-unsplash.jpg'} alt="2" />
                </div>
            </div>
            <div className='col-span-full group md:col-span-1 md:row-span-1 relative h-full'>
                <h6 className='text-xl text-white absolute z-10 m-3 px-3 py-1 font-medium bg-purple-600 rounded-tl-md rounded-br-md'>Mercato</h6>
                <h4 className='absolute bottom-12 md:group-hover:bottom-24 transition-all duration-500 left-2 font-semibold text-xl text-white z-10'>Transfert de Mbappe</h4>
                <div className='z-0 md:group-hover:bottom-7 absolute transition-all duration-500 bottom-0 left-2 group-hover:z-10 w-52'>
                    <div className='flex md:flex-col lg:flex-row justify-between'>
                        <div className='flex justify-between items-center w-20'>
                            <FaComment className='text-white items-center' />
                            <p className=" text-slate-200">Comment</p>
                        </div>
                        <div className='flex justify-between items-center w-28'>
                            <FaClock className='text-white items-center' />
                            <p className=" text-slate-200">8 hours ago</p>
                        </div>
                    </div>
                </div>
                <div className='duration-300 h-full bg-blend-lighten md:hover:bg-blend-darken'>
                    <img className='object-cover bg-blend-lighten md:hover:bg-blend-darken h-full transform duration-300' src={process.env.PUBLIC_URL + 'ilya-O0hE1cmbbkw-unsplash.jpg'} alt="3" />
                </div>
            </div>
            <div className='col-span-full group md:col-span-1 md:row-span-1 relative h-full'>
                <h6 className='text-xl text-white absolute z-10 m-3 px-3 py-1 font-medium bg-purple-600 rounded-tl-md rounded-br-md'>Mercato</h6>
                <h4 className='absolute bottom-12 md:group-hover:bottom-24 transition-all duration-500 left-2 font-semibold text-xl text-white z-10'>Transfert de Mbappe</h4>
                <div className='z-0 md:group-hover:bottom-7 absolute transition-all duration-500 bottom-0 left-2 group-hover:z-10 w-52'>
                    <div className='flex md:flex-col lg:flex-row justify-between'>
                        <div className='flex justify-between items-center w-20'>
                            <FaComment className='text-white items-center' />
                            <p className=" text-slate-200">Comment</p>
                        </div>
                        <div className='flex justify-between items-center w-28'>
                            <FaClock className='text-white items-center' />
                            <p className=" text-slate-200">8 hours ago</p>
                        </div>
                    </div>
                </div>
                <div className='duration-300 h-full bg-blend-lighten md:hover:bg-blend-darken'>
                    <img className='object-cover bg-blend-lighten md:hover:bg-blend-darken h-full transform duration-300' src={process.env.PUBLIC_URL + 'ilya-O0hE1cmbbkw-unsplash.jpg'} alt="3" />
                </div>
            </div>
        </div>
    )
}
