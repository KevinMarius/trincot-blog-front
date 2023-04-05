import React from 'react';
import Sidebar from './Sidebar';
import { FaComment, FaUserAlt, FaClock } from 'react-icons/fa';

export default function BodyMain() {
  return (
    <div className='grid grid-cols-3 w-[100%] px-6 my-6'>
      <div className='col-span-full md:col-span-2 grid grid-cols-2'>
        <div className='col-span-full md:col-span-1'>
          <div className='relative group px-2 my-4'>
            <img className=' h-64 w-[100%]' src={process.env.PUBLIC_URL + 'eilis-garvey-4x6aA37sMPg-unsplash.jpg'} alt='image' />
            <div className='flex justify-between pt-2 items-center mb-2'>
              <div className='flex justify-between w-32'>
                <div className='flex justify-between w-12'>
                  <FaUserAlt className=' text-gray-500 w-3 h-3' />
                  <p className='text-gray-600 font-sans font-normal text-xs'>Admin</p>
                </div>
                <div className='flex justify-between'>
                  <FaClock className=' text-gray-500 w-3 h-3' />
                  <p className='text-gray-600 font-sans font-normal text-xs'>8 juin 2019</p>
                </div>
              </div>
              <div className='flex justify-between'>
                <FaComment className=' text-gray-500 w-3 h-3' />
                <p className='text-gray-600 font-sans font-normal text-xs'>09 comments</p>
              </div>
            </div>
            <a href='/' className='text-black text-2xl font-alata font-semibold hover:text-purple-500 transition-all duration-500'>
              The god of war
            </a>
            <p className='text-md mt-2'>
              You can also use variant modifiers to target media queries like responsive breakpoints.
            </p>
            <button className='bg-purple-500 py-1 px-3 rounded-md font-alata mt-3 text-white hover:bg-purple-600'>Read more</button>
          </div>
        </div>
        <div className='col-span-full md:col-span-1'>
          <div className='relative px-2  my-4'>
            <img className=' h-64 w-[100%]' src={process.env.PUBLIC_URL + 'eilis-garvey-4x6aA37sMPg-unsplash.jpg'} alt='image' />
            <div className='flex justify-between pt-2 items-center mb-2'>
              <div className='flex justify-between w-32'>
                <div className='flex justify-between w-12'>
                  <FaUserAlt className=' text-gray-500 w-3 h-3' />
                  <p className='text-gray-600 font-sans font-normal text-xs'>Admin</p>
                </div>
                <div className='flex justify-between'>
                  <FaClock className=' text-gray-500 w-3 h-3' />
                  <p className='text-gray-600 font-sans font-normal text-xs'>8 juin 2019</p>
                </div>
              </div>
              <div className='flex justify-between'>
                <FaComment className=' text-gray-500 w-3 h-3' />
                <p className='text-gray-600 font-sans font-normal text-xs'>09 comments</p>
              </div>
            </div>
            <a href='/' className='text-black text-2xl font-alata font-semibold hover:text-purple-500 transition-all duration-500'>
              The god of war
            </a>
            <p className='text-md mt-2'>
              You can also use variant modifiers to target media queries like responsive breakpoints.
            </p>
            <button className='bg-purple-500 py-1 px-3 rounded-md font-alata mt-3 text-white hover:bg-purple-600'>Read more</button>
          </div>
        </div>
        <div className='col-span-full md:col-span-1'>
          <div className='relative px-2 my-4'>
            <img className=' h-64 w-[100%]' src={process.env.PUBLIC_URL + 'eilis-garvey-4x6aA37sMPg-unsplash.jpg'} alt='image' />
            <div className='flex justify-between pt-2 items-center mb-2'>
              <div className='flex justify-between w-32'>
                <div className='flex justify-between w-12'>
                  <FaUserAlt className=' text-gray-500 w-3 h-3' />
                  <p className='text-gray-600 font-sans font-normal text-xs'>Admin</p>
                </div>
                <div className='flex justify-between'>
                  <FaClock className=' text-gray-500 w-3 h-3' />
                  <p className='text-gray-600 font-sans font-normal text-xs'>8 juin 2019</p>
                </div>
              </div>
              <div className='flex justify-between'>
                <FaComment className=' text-gray-500 w-3 h-3' />
                <p className='text-gray-600 font-sans font-normal text-xs'>09 comments</p>
              </div>
            </div>
            <a href='/' className='text-black text-2xl font-alata font-semibold hover:text-purple-500 transition-all duration-500'>
              The god of war
            </a>
            <p className='text-md mt-2'>
              You can also use variant modifiers to target media queries like responsive breakpoints.
            </p>
            <button className='bg-purple-500 py-1 px-3 rounded-md font-alata mt-3 text-white hover:bg-purple-600'>Read more</button>
          </div>
        </div>
        <div className='col-span-full md:col-span-1'>
          <div className='relative px-2  my-4'>
            <img className=' h-64 w-[100%]' src={process.env.PUBLIC_URL + 'eilis-garvey-4x6aA37sMPg-unsplash.jpg'} alt='image' />
            <div className='flex justify-between pt-2 items-center mb-2'>
              <div className='flex justify-between w-32'>
                <div className='flex justify-between w-12'>
                  <FaUserAlt className=' text-gray-500 w-3 h-3' />
                  <p className='text-gray-600 font-sans font-normal text-xs'>Admin</p>
                </div>
                <div className='flex justify-between'>
                  <FaClock className=' text-gray-500 w-3 h-3' />
                  <p className='text-gray-600 font-sans font-normal text-xs'>8 juin 2019</p>
                </div>
              </div>
              <div className='flex justify-between'>
                <FaComment className=' text-gray-500 w-3 h-3' />
                <p className='text-gray-600 font-sans font-normal text-xs'>09 comments</p>
              </div>
            </div>
            <a href='/' className='text-black text-2xl font-alata font-semibold hover:text-purple-500 transition-all duration-500'>
              The god of war
            </a>
            <p className='text-md mt-2'>
              You can also use variant modifiers to target media queries like responsive breakpoints.
            </p>
            <button className='bg-purple-500 py-1 px-3 rounded-md font-alata mt-3 text-white hover:bg-purple-600'>Read more</button>
          </div>
        </div>
      </div>
      <div className='col-span-full md:col-span-1'>
        <Sidebar />
      </div>
    </div>
  )
}
