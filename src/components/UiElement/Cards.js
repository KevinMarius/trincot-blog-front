import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import { useInRouterContext } from "react-router-dom";
import { useHttpClient } from "../../hooks/http-hook";
import { FaComment, FaUserAlt, FaClock } from 'react-icons/fa';
import AuthContext from "../../context/Auth";

function Cards({ product, index }) {
  const [liked, setLike] = useState(false);
  /* const { isLoading, sendRequest, error, clearError } = useHttpClient();*/
  //const [currentUser, setCurrentUser] = useContext(AuthContext); 
  useInRouterContext()

  const handleClickLike = async function (e) {
    e.preventDefault();
    /* const token = currentUser.token;
    await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/like/${product._id}/vote/like`, 
      'post', 
      null, {
        "Authorization": "Bearer " + token
      }) */
  };

  return (
    <div className='col-span-full sm:col-span-1'>
      <div className='relative group px-2 my-4'>
        <img className=' h-64 w-[100%]' src={process.env.REACT_APP_ASSET_URL + `/${product.picture}`} alt='image' />
        <h6 className='text-xl text-white absolute z-10 m-3 px-3 py-1 top-0 left-0 font-medium bg-purple-600 rounded-tl-md rounded-br-md'>{product.category.title}</h6>
        <div className='flex justify-between pt-2 items-center mb-2'>
          <div className='flex justify-between w-32'>
            <div className='flex justify-between w-12'>
              <FaUserAlt className=' text-gray-500 w-3 h-3' />
              <p className='text-gray-600 font-sans font-normal text-xs'>{product.author.name}</p>
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
        <a href={'blog/post/' + `${product._id}`} className='text-black text-2xl font-alata font-semibold hover:text-purple-500 transition-all duration-500'>
          {product.title}
        </a>
        <p className='text-md mt-2'>
          {product.content}
        </p>
        <button className='bg-purple-500 py-1 px-3 rounded-md font-alata mt-3 text-white hover:bg-purple-600'>Read more</button>
      </div>
    </div>
  );
}

export default Cards;
