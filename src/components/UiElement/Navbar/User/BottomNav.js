import React, { useState, useEffect } from 'react'
import { RiArrowDownSFill, RiSearchLine } from 'react-icons/ri';
import { useHttpClient } from '../../../../hooks/http-hook';

export default function BottomNav() {
  const [categories, setCategories] = useState([]);
  const [postByCategory, setPostByCategory] = useState([]);

  const { isLoading, sendRequest, error, clearError } = useHttpClient();

  const getPostData = async (categoryId) => {
    await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/post/getPostByCategory/${categoryId}`)
      .then((response) => {
        setPostByCategory(response.posts);
      })
  }

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
    <React.Fragment>
      <div className='relative'>
        <div className='bg-zinc-900 w-[94%] h-14 mx-auto'>
          <nav className='flex justify-between items-center text-white px-4'>
            <div className="hidden h-15 md:flex font-alata items-center target: space-x-4">
              <a className='hover:bg-purple-500 hover:no-underline text-white active:bg-purple-500 transition duration-500 flex h-14 items-center px-1 relative' href='/'>
                Home
              </a>
              {categories.map((item) => (
                <div className='group relative'>
                  <a onMouseEnter={(e) => getPostData(item._id)} key={item._id} className='hover:bg-purple-500 hover:no-underline text-white active:bg-purple-500 transition duration-500 flex h-14 items-center px-1' href='link1'>
                    {item.title}
                    <RiArrowDownSFill />
                  </a>
                  <div className=" hidden group-hover:inline-block max-w-screen-md absolute z-20">
                    <div className='hidden md:flex bg-transparent'>
                      {postByCategory?.map((datas) => (
                        <a key={datas._id} href='/'>
                        <div className='relative group my-3 px-2'>
                          <img src={process.env.PUBLIC_URL + 'eilis-garvey-4x6aA37sMPg-unsplash.jpg'} className=' object-fill w-96 h-auto' />
                          <div className='absolute bottom-0 justify-center left-0 right-0 mx-2 bg-black opacity-0 group-hover:opacity-40 duration-500'>
                            <h5 className='text-white text-lg font-semibold font-alata px-1'>{datas.title}</h5>
                            <p className='text-white text-sm px-1'>{datas.content}</p>
                          </div>
                        </div>
                      </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex items-center h-14 justify-between'>
              <div className="relative w-full">
                <input type="text" id="simple-search" className="bg-zinc-800 border-none text-white text-sm rounded-l-md block w-36 focus:w-44 focus:outline-none transition-w duration-700 pl-5 p-2.5" placeholder="Search" required />
              </div>
              <button type="submit" className="p-2.5 text-md font-bold bg-zinc-800 rounded-r-md border border-none focus:outline-none">
                <RiSearchLine className='h-5 w-5 hover:text-purple-600' />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </React.Fragment>
  )
}
