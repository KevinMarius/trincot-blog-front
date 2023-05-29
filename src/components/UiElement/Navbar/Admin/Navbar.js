import React, { useState, useContext } from "react";
import "../../../../assets/navbar.css";
import { FaArrowLeft, FaSearch, FaBars } from 'react-icons/fa';

import AuthContext from '../../../../context/Auth';

export default function Navbars(props) {

	const [currentUser, setCurrentUser ] = useContext(AuthContext);

	console.log(currentUser.userData);

	return (
		<nav className="bg-white fixed border z-50 shadow-md w-full border-gray-200 dark:bg-gray-900">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
				<div className='flex gap-8 items-center'>
					{/* <button className='group w-10 h-10 rounded-md px-3 hover:bg-zinc-100'><FaArrowLeft className="w-4 h-4 text-gray-500 font-medium"/></button> */}
					<a href="/dashboard/home" className="flex items-center">
						<img src={process.env.PUBLIC_URL + '/output-onlinepngtools.png'} className="h-8 mr-3" alt="Flowbite Logo" />
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Trincot</span>
					</a>
				</div>
				<div className="flex gap-2 md:order-2">
					<div className='flex gap-4'>
						<div className="relative hidden md:block">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<FaSearch className="w-4 h-4 text-gray-400 font-medium" aria-hidden="true" fill="currentColor" />
								<span className="sr-only">Search icon</span>
							</div>
							<input type="text" id="search-navbar" className="block w-full pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
						</div>
						<div className="flex gap-2 items-center ml-3">
							<div>
								<button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
									<span className="sr-only">Open user menu</span>
									<img className="w-8 h-8 rounded-full" src={process.env.REACT_APP_ASSET_URL + `/${currentUser.userData.userExist.picture}`} alt="user photo" />
								</button>
							</div>
							<div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
								<div className="px-4 py-3" role="none">
									<p className="text-sm text-gray-900 dark:text-white" role="none">
										{currentUser.userData.userExist.name}
									</p>
									<p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
										{currentUser.userData.userExist.email}
									</p>
								</div>
								<ul className="py-1" role="none">
									<li>
										<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
									</li>
									<li>
										<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
									</li>
									<li>
										<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
									</li>
									<li>
										<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
						<span className="sr-only">Open menu</span>
						<FaBars className="w-6 h-6" aria-hidden="true" />
					</button>
				</div>
				<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
					<div className="relative mt-3 md:hidden">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<FaSearch className="w-5 h-5 text-gray-500" aria-hidden="true" />
						</div>
						<input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
					</div>
				</div>
			</div>
		</nav>
	)
}