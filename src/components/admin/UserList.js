import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import UserItem from './UserItem';
import Button from '../UiElement/button';

import { useHttpClient } from '../../hooks/http-hook';
import AuthContext from '../../context/Auth';
import LoadingSpinner from '../UiElement/loadingSpinner';
import ErrorModal from '../UiElement/ErrorModal';

const UserList = (props) => {
	const [showConfirmModal, setShowConfirmModal] = useState(false);
	const [currentUser, setCurrentUser] = useContext(AuthContext);
	const { isLoading, sendRequest, error, clearError } = useHttpClient();

	const navigate = useNavigate();

	const showDeleteWarningHandler = () => {
		setShowConfirmModal(true);
	};

	const handleEditClick = (e, userId) => {
		e.preventDefault();
		navigate("/dashboard/user/update/" + userId);
	}

	const cancelDeleteHandler = () => {
		setShowConfirmModal(false);
	};

	const confirmDeleteHandler = async (e, userId) => {
		e.preventDefault();
		console.log(userId);
		setShowConfirmModal(false);
		const token = currentUser.userData.token;
		console.log(userId);
		/* try {
				await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/user/delete/${userId}`, 'delete', null, {
						"Authorization": "Bearer " + token
				});
				props.onDelete(userId);
		} catch (err) {
				console.log(err);
		} */
	};

	if (props.users.length == 0) {
		return (
			<div href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Empty !!</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">No Users found. Maybe create one?</p>
                <Button to="/dashboard/user/add">Share User</Button>
            </div>
		);
	}

	return (
		<React.Fragment>
			<ErrorModal error={error} onclear={clearError} />
			<div className='mt-3'>
				<h3 className='text-2xl mt-2 font-semibold'>All Users</h3>
				{isLoading ? <LoadingSpinner /> :


					<table className="w-full mt-4 text-sm text-left text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="p-4">
									#
								</th>
								<th scope="col" className="px-6 py-3">
									Name
								</th>
								<th scope="col" className="px-6 py-3">
									Phone
								</th>
								<th scope="col" className="px-6 py-3">
									Status
								</th>
								<th scope="col" className="px-6 py-3">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{props.users.map((item, index) => (

								<UserItem
									key={item._id}
									index={index}
									item={item}
									onDelete={(e) => confirmDeleteHandler(e, item._id)}
									handleEditClick={(e) => handleEditClick(e, item._id)}
									error={error}
									clearError={clearError}
									showDeleteWarningHandler={showDeleteWarningHandler}
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

export default UserList;
