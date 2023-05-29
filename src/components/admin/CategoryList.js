import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import CategoryItem from './CategoryItem';
import Button from '../UiElement/button';

import { useHttpClient } from '../../hooks/http-hook';
import AuthContext from '../../context/Auth';
import LoadingSpinner from '../UiElement/loadingSpinner';
import ErrorModal from '../UiElement/ErrorModal';

import { FaArrowRight } from 'react-icons/fa';

const CategoryList = (props) => {
	const [showConfirmModal, setShowConfirmModal] = useState(false);
	const [currentUser, setCurrentUser] = useContext(AuthContext);
	const { isLoading, sendRequest, error, clearError } = useHttpClient();

	const navigate = useNavigate();

	const showDeleteWarningHandler = () => {
		setShowConfirmModal(true);
	};

	const handleEditClick = (e, categoryId) => {
		navigate("/dashboard/category/update/" + categoryId);
	}

	const cancelDeleteHandler = () => {
		setShowConfirmModal(false);
	};

	const confirmDeleteHandler = async (e, categoryId) => {
		e.preventDefault();
		setShowConfirmModal(false);
		const token = currentUser.userData.token;

		try {
			await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/category/delete/${categoryId}`,
				'delete', null, {
				"Authorization": "Bearer " + token
			});
			props.onDelete(categoryId);
		} catch (err) {
			console.log(err);
		}
	};

	if (props.categories.length == 0) {
		return (
			<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<svg class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>

				<h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Empty !!</h5>

				<p class="mb-3 font-normal text-gray-500 dark:text-gray-400">No categories found. Maybe create one?</p>
				<a href="/dashboard/category/add" class="inline-flex items-center text-blue-600 hover:underline">
					Share Category
					<FaArrowRight />
				</a>
			</div>

		);
	}


	return (
		<React.Fragment>
			<ErrorModal error={error} onclear={clearError} />
			<div>
				<h3 className='mt-2 text-2xl font-semibold'>All Categories</h3>
				{isLoading ? <LoadingSpinner /> :

					<table className="w-full mt-4 text-sm text-left text-gray-500 dark:text-gray-400">
						<caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
							Our products
							<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
						</caption>
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="px-3 py-4">
									#
								</th>
								<th scope="col" className="px-3 py-4">
									Category title
								</th>
								<th scope="col" className="px-3 py-4">
									Content
								</th>
								<th scope="col" className="px-3 w-14 py-4">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{props.categories.map((item, index) => (
								<CategoryItem
									key={item._id}
									index={index}
									item={item}
									handleEditClick={(e) => handleEditClick(e, item._id)}
									error={error}
									clearError={clearError}
									showDeleteWarningHandler={showDeleteWarningHandler}
									onCancel={cancelDeleteHandler}
									onDelete={(e) => confirmDeleteHandler(e, item._id)}
									cancelDeleteHandler={cancelDeleteHandler}
									showConfirmModal={showConfirmModal}
								/>
							))}

						</tbody>
					</table>

				}
			</div>
		</React.Fragment>
	);
};

export default CategoryList;
