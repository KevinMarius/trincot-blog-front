import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import CategoryItem from './CategoryItem';
import Button from '../UiElement/button';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import { useHttpClient } from '../../hooks/http-hook';
import AuthContext from '../../context/Auth';
import LoadingSpinner from '../UiElement/loadingSpinner';
import ErrorModal from '../UiElement/ErrorModal';

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
            <Container>
                <Card className="text-center">
                    <Card.Header>Empty !!</Card.Header>
                    <Card.Body>
                        <Card.Title>No categories found. Maybe create one?</Card.Title>
                        <Button to="/dashboard/category/add">Share Category</Button>
                    </Card.Body>
                </Card>
            </Container>
        );
    }


    return (
        <React.Fragment>
            <ErrorModal error={error} onclear={clearError}/>
            <Container className='mt-3'>
                <h3>All Categories</h3>
                {isLoading ? <LoadingSpinner /> :
                    <Table striped bordered hover size="sm" className='mt-3'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Action</th>
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
                    </Table>
                }
            </Container>
        </React.Fragment>
    );
};

export default CategoryList;
