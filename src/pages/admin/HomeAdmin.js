import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/homeAdmin.css";

import { FaUserFriends, FaCriticalRole } from 'react-icons/fa';
import { MdArticle, MdCategory, MdComment, MdLogout } from 'react-icons/md';

import Chart from "../../components/UiElement/Chart";

import { useHttpClient } from "../../hooks/http-hook";

export default function HomeAdmin() {
	const { isLoading, sendRequest, error, clearError } = useHttpClient();
	const [countPost, setCountPost] = useState('');
	const [countCategory, setCountCategory] = useState('');
	const [countComment, setCountComment] = useState('');
	const [countUser, setCountUser] = useState('');
	let item = [];

	useEffect(() => {
		const getNumberPost = async () => {
			await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/post/count`)
			.then((response) => { setCountPost(response.numberPost) })
		}
		const getNumberCategory = async () => {
			await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/category/count`)
			.then((response) => { setCountCategory(response.numberCategory) })
		}
		const getNumberUser = async () => {
			await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/user/count`)
			.then((response) => { setCountUser(response.numberUser) })
		}
		const getNumberComment = async () => {
			await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/comment/count`)
			.then((response) => { setCountComment(response.numberComment) })
		}

		getNumberCategory();
		getNumberComment();
		getNumberUser();
		getNumberPost();
		
	}, [sendRequest])
	/* Statistic.map((stat, key) => {
		item.push(<CardStatistic key={key} index={key} product={stat} />);
	}) */
	return (
		<div className="flex flex-col w-[95%] mx-auto">
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-11 gap-3'>
				<div className="p-4 w-[100%] bg-slate-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
					<div className='bg-zinc-200 w-16 h-16 flex justify-center items-center rounded-full' aria-hidden="true" fill="currentColor">
						<FaUserFriends className='w-10 h-10 text-yellow-300' />
					</div>
					<h5 className="mb-2 w-auto text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">User: <strong>{countUser < 10 ? '0' + countUser : countUser}</strong></h5>
					<a href="/dashboard/user/all" className="inline-flex items-center text-blue-600 hover:underline">
						See all items
						<svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
					</a>
				</div>
				<div className="p-4 w-[100%] bg-slate-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
					<div className='bg-zinc-200 w-16 h-16 flex justify-center items-center rounded-full' aria-hidden="true" fill="currentColor">
						<MdArticle className='w-10 h-10 text-blue-400' />
					</div>
					<h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Articles: <strong>{countPost < 10 ? '0' + countPost : countPost}</strong></h5>
					<a href="/dashboard/post/all" className="inline-flex items-center text-blue-600 hover:underline">
						See all items
						<svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
					</a>
				</div>
				<div className="p-4 w-[100%] bg-slate-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
					<div className='bg-zinc-200 w-16 h-16 flex justify-center items-center rounded-full' aria-hidden="true" fill="currentColor">
						<MdCategory className='w-10 h-10 text-red-400' />
					</div>
					<h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Categories: <strong>{countCategory < 10 ? '0' + countCategory : countCategory}</strong></h5>
					<a href="/dashboard/category/all" className="inline-flex items-center text-blue-600 hover:underline">
						See all items
						<svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
					</a>
				</div>
				<div className="p-4 w-[100%] bg-slate-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
					<div className='bg-zinc-200 w-16 h-16 flex justify-center items-center rounded-full' aria-hidden="true" fill="currentColor">
						<MdComment className='w-10 h-10 text-green-400' />
					</div>
					<h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Comments: <strong>{countComment < 10 ? '0' + countComment : countComment}</strong></h5>
					<a href="/dashboard/comment/all" className="inline-flex items-center text-blue-600 hover:underline">
						See all items
						<svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
					</a>
				</div>
			</div>
			<div>
				<Chart />
			</div>
		</div>
	);
}
