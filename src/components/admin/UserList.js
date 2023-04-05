import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import UserItem from './UserItem';
import Button from '../UiElement/button';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

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
            <Container>
                <Card className="text-center">
                    <Card.Header>Empty !!</Card.Header>
                    <Card.Body>
                        <Card.Title>No Users found. Maybe create one?</Card.Title>
                        <Button to="/dashboard/user/add">Share User</Button>
                    </Card.Body>
                </Card>
            </Container>
        );
    }

    return (
        <React.Fragment>
            <ErrorModal error={error} onclear={clearError} />
            <Container className='mt-3'>
                <h3>All Users</h3>
                {isLoading ? <LoadingSpinner /> :
                    <Table striped bordered hover size="sm" className='mt-3'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>picture</th>
                                <th>name</th>
                                <th>phone</th>
                                <th>role</th>
                                <th>Action</th>
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
                    </Table>
                }
            </Container>
        </React.Fragment>
    );
};

export default UserList;
