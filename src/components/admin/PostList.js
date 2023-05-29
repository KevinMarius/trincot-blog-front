import React, { useState, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import PostItem from './PostItem';
import Button from '../UiElement/button';
import Pagination from '../UiElement/Pagination';

import { useHttpClient } from '../../hooks/http-hook';
import AuthContext from '../../context/Auth';
import LoadingSpinner from '../UiElement/loadingSpinner';
import ErrorModal from '../UiElement/ErrorModal';


const PostList = (props) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [currentUser, setCurrentUser] = useContext(AuthContext);
    const { isLoading, sendRequest, error, clearError } = useHttpClient();
    const PageSize = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const { Productsdata, textFilter, selectFilter, search_parameters } = props;

    const navigate = useNavigate();

    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true);
    };

    const handleEditClick = (e, postId) => {
        e.preventDefault();
        navigate("/dashboard/post/update/" + postId);
    }

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
    };

    const confirmDeleteHandler = async (e, postId) => {
        e.preventDefault();
        setShowConfirmModal(false);
        const token = currentUser.userData.token;
        try {
            await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/post/delete/${postId}`,
                'delete', null, {
                "Authorization": "Bearer " + token
            });
            props.onDelete(postId);
        } catch (err) {
            console.log(err);
        }
    };


    function search(items) {
        return items.filter((item) =>
            item.category.title.includes(selectFilter) && search_parameters.some((parameter) =>
                item[parameter]?.toString().toLowerCase().includes(textFilter)
            )
        );
    }

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return search(Productsdata).slice(firstPageIndex, lastPageIndex);
    }, [currentPage, search]);

    if (Productsdata.length == 0) {
        return (
            <div href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Empty !!</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">No categories found. Maybe create one?</p>
                <Button to="/dashboard/post/add">Share Post</Button>
            </div>

        );
    }

    return (
        <React.Fragment>
            <ErrorModal error={error} onclear={clearError} />
            {isLoading ? <LoadingSpinner /> :
                <div className='mt-6'>
                    <table className="w-full mt-2 text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-4">
                                    #
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Content
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Published
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentTableData.map((item, index) => (
                                <PostItem
                                    key={item._id}
                                    item={item}
                                    index={index}
                                    currentUserId={currentUser.userData.userExist}
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
                    {<Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={Productsdata.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />}
                </div>
            }
        </React.Fragment>
    );
};

export default PostList;
