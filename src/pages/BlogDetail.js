import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { useHttpClient } from "../hooks/http-hook";
import { useForm } from "../hooks/form-hook";

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH, VALIDATOR_EMAIL } from "../utils/validators";

import { FaUserAlt, FaClock, FaComment, FaHeart } from "react-icons/fa";

import Button from "../components/UiElement/button";
import Input from "../components/Form/input";

function BlogDetail() {
  const [post, setPost] = useState("");
  const [comments, setComments] = useState([]);
  const [countComment, setCountComment] = useState([]);
  const { isLoading, sendRequest, error, clearError } = useHttpClient();
  const postId = useParams().postId;

  const [formState, inputHandle, setFormData] = useForm({
    name: {
      value: '',
      isValid: false
    },
    name: {
      value: '',
      isValid: false
    },
    content: {
      value: '',
      isValid: false
    }
  },
    false
  );

  useEffect(() => {
    console.log(postId);
    const getPostData = async () => {
      await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/post/get/${postId}`)
        .then((responseData) => {
          setPost(responseData.post);
        })
    }
    const getCommentsData = async () => {
      await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/comment/get/${postId}`)
        .then((response) => {
          setComments(response.comments);
        })
    }

    const getCountComment = async () => {
      await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/comment/getCountCommentsByPost/${postId}`)
      .then((response) => {
        setCountComment(response.nbr);
      })
    }

    getCountComment();
    getCommentsData();
    getPostData();

    setFormData({
      ...formState.inputs,
      name: {
        value: '',
        isValid: false
      },
      email: {
        value: '',
        isValid: false
      },
      content: {
        value: '',
        isValid: false
      }
    }, false);
  }, [sendRequest, setFormData]);

  const displayComment = comments.map((itemComment) => {
      return (
        <div className="flex my-1" key={itemComment._id}>
          <img className="h-12 w-12 rounded-full" src={process.env.PUBLIC_URL + '/avatar.png'} alt="imgs" />
          <div className="flex flex-col bg-slate-300 border border-zinc-600 rounded-r-md ml-2 px-3 py-1">
            <h3 className="text-md font-extrabold text-zinc-900 mb-2">{itemComment.name}</h3>
            <p className="text-sm text-black text-justify font-semibold mb-2">{itemComment.content}</p>
            <div className="flex flex-row-reverse"><p className="text-zinc-600 text-xs font-light">il y'a 10 jours</p></div>
          </div>
        </div>
      )
  });

  const handleSubmitComment = async (e, postId) => {
    e.preventDefault();
    console.log(postId);
    const post = {
      name: formState.inputs.name.value,
      email: formState.inputs.email.value,
      content: formState.inputs.content.value,
    }
    await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/comment/${postId}`, 'post', post);
    
  }

  return (
    <React.Fragment>
      <div className="flex flex-col m-6">
        <div className="w-full h-auto">
          <img className="w-[100%]" src={process.env.REACT_APP_ASSET_URL + `/${post.picture}`} alt="img" />
        </div>
        <div className="ml-2 mt-4">
          <h1 className="text-4xl font-alata font-extrabold">{post.title}</h1>
        </div>
        <div className="flex mt-6 justify-between mx-0 sm:mx-8 text-zinc-700 text-xs sm:text-sm font-sans">
          <div className="flex">
            <div className="flex mx-1 sm:mx-2 items-center">
              <FaUserAlt className="mr-1" />
              <p>Good</p>
            </div>
            <div className="flex mx-1 sm:mx-2 items-center">
              <FaClock className="mr-1" />
              <p>01/10/2009</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex mx-1 sm:mx-2 items-center">
              <button className="cursor-pointer hover:scale-125 duration-300"><FaHeart className="mr-1" /></button>
              <p>46 likes</p>
            </div>
            <div className="flex mx-1 sm:mx-2 items-center">
              <FaComment className="mr-1" />
              <p>{countComment >= 10 ? countComment : '0' + countComment} {countComment >=2 ? 'comments' : 'comment'}</p>
            </div>
          </div>
        </div>
        <div className="my-6 mx-1">
          <div className="flex flex-col text-justify">
            <p>
              {post.content}
            </p>
          </div>
        </div>
        <div className="border-b border-b-zinc-300 my-2" />
        {comments.length <= 0
          ?
          <h2>No comments</h2>
          :
          <React.Fragment>
            <div className="my-3">
              <h2 className="text-3xl font-alata font-bold">{countComment >= 10 ? countComment : '0' + countComment} {countComment >=2 ? 'comments' : 'comment'}</h2>
            </div>
            {displayComment}
          </React.Fragment>
        }

        <div className="border-b border-b-zinc-300 my-2" />
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold font-alata my-6">Post your comment</h2>
          <form onSubmit={(e) => handleSubmitComment(e, postId)} className="flex flex-col items-center w-full">
            <Input 
              element="input"
              type="text"
              placeholder="Enter your Name"
              id="name"
              errorText="please enter the valid name."
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
              onInput={inputHandle}
            />
            <Input 
              element="input"
              type="email"
              placeholder="Enter your Email"
              id="email"
              errorText="please enter the valid email."
              validators={[VALIDATOR_EMAIL()]}
              onInput={inputHandle}
            />
            <Input 
              element="textarea"
              placeholder="Enter your comment"
              id="content"
              errorText="please enter the valid email."
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandle}
            />
            <Button type="submit" bgColor="bg-purple-400" width="[80%]" bgColorHover="purple-500" primary disabled={!formState.isValid} pointer={formState.isValid ? 'cursor-pointer' : 'cursor-not-allowed'}>Send comment</Button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BlogDetail;
