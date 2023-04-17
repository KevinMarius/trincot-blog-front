import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaClock } from 'react-icons/fa';
import { useHttpClient } from '../../hooks/http-hook';

export default function Sidebar() {
    const [lastPosts, setLastPosts] = useState([]);
    const [bestPosts, setBestPosts] = useState([]);
    const { isLoading, sendRequest, error, clearError } = useHttpClient();


    useEffect(() => {
        const getLastPostsData = async () => {
            await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/post/getLastPost`)
                .then((response) => {
                    setLastPosts(response.posts);
                });
        }
        const getBestPostsData = async () => {
            await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/post/getBestPost`)
            .then((response) => {
                setBestPosts(response.posts);
            });
        }
        getBestPostsData();
        getLastPostsData();
    }, [sendRequest]);

    return (
        <React.Fragment>
            <div className=' px-3 divide-y-2 divide-purple-300'>
                <h4 className='text-2xl font-alata font-semibold mb-6'>Recent posts</h4>
                {lastPosts.map((item) => (
                    <div key={item._id} className='flex items-center mt-2 pt-2'>
                        <img className='w-20 h-20 object-fill rounded-md hover:scale-105 duration-200' src={process.env.REACT_APP_ASSET_URL + `/${item.picture}`} alt='image' />
                        <div className='ml-4'>
                            <a className='hover:text-purple-400 hover:no-underline transition-all duration-500' href={`blog/post/${item._id}`}><h6 className='text-2xl font-bold'>{item.title}</h6></a>
                            <div className='flex mt-3'>
                                <FaUserCircle />
                                <p className='text-sm ml-2 font-alata'> By {item.author.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='px-3 my-8'>
                <h4 className='text-2xl font-alata font-semibold mb-6'>Bests posts</h4>
                {bestPosts.map((bestItem) => (
                    <div className='flex relative items-center mt-2 pt-2'>
                    <img className='w-20 h-20 object-fill rounded-md' src={process.env.PUBLIC_URL + 'eilis-garvey-4x6aA37sMPg-unsplash.jpg'} alt='image' />
                    <div className='ml-4'>
                        <a className='decoration-slice' href={`blog/post/${bestItem._id}`}><h6 className='text-2xl font-bold'>{bestItem.title}</h6></a>
                        <div className='flex mt-3'>
                            <FaClock />
                            <p className='text-sm ml-2 font-alata'> 8 Dec 2016</p>
                        </div>
                    </div>
                    <div className='absolute w-9 h-9 top-0 left-0 rounded-full bg-purple-500'>
                        <p className='text-white font-bold text-center mt-1'>{bestItem.comment_count}</p>
                    </div>
                </div>
                ))}
            </div>
        </React.Fragment>
    )
}
