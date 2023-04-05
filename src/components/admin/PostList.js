import React, { useState, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import PostItem from './PostItem';
import Button from '../UiElement/button';
import Pagination from '../UiElement/Pagination';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

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
            <Container className='mt-4'>
                <Card className="text-center">
                    <Card.Header>Empty !!</Card.Header>
                    <Card.Body>
                        <Card.Title>No categories found. Maybe create one?</Card.Title>
                        <Button to="/dashboard/post/add">Share Post</Button>
                    </Card.Body>
                </Card>
            </Container>
        );
    }

    return (
        <React.Fragment>
            <ErrorModal error={error} onclear={clearError} />


            {isLoading ? <LoadingSpinner /> :
            <div>
                <Table striped bordered hover size="sm" className='mt-3'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>picture</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Published</th>
                            <th>Action</th>
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
                </Table>
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
