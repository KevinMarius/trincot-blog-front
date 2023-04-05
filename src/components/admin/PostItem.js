import React, { useContext } from 'react';
import ErrorModal from '../UiElement/ErrorModal';
import Modal from '../UiElement/Modal';

import Badge from 'react-bootstrap/Badge';

import Button from '../UiElement/button';
import Avatar from '../UiElement/Avatar';

const PostItem = (props) => {
    return (
        <React.Fragment>
            <ErrorModal error={props.error} onClear={props.clearError} />
            <Modal
                show={props.showConfirmModal}
                onCancel={props.cancelDeleteHandler}
                header="Are you sure?"
                footerClass="place-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button inverse onClick={props.onCancel}>
                            Cancel
                        </Button>
                        <Button danger onClick={props.onDelete}>
                            Delete
                        </Button>
                    </React.Fragment>
                }
            >
                <p>
                    Do you want to proceed and delete this place? Please note that it
                    can't be undone thereafter.
                </p>
            </Modal>
            <tr key={props.item._id}>
                <td className='text-center align-middle'>{props.index + 1}</td>
                <td className='text-center align-middle'><Avatar image={process.env.REACT_APP_ASSET_URL + `/${props.item.picture}`} width={80} alt={props.item.title} /></td>
                <td className='text-center align-middle'>{props.item.title}</td>
                <td className='text-center align-middle'>{props.item.content}</td>
                <td className='text-center align-middle'>
                    {
                        props.state ? <Badge bg="success"><i className='bi-check2-all' /></Badge> : <Badge bg="warning"><i className='bi-x-octagon' /></Badge>
                    }
                </td>
                <td className='text-center align-middle'>
                    { props.item.author === props.currentUserId && (
                        <Button onClick={props.handleEditClick} inverse className='btn btn-primary me-1'>Edit</Button>
                    )}
                    <Button variant="primary" danger onClick={props.showDeleteWarningHandler} className='btn btn-danger'>Delete</Button>
                </td>
            </tr>
        </React.Fragment>
    );
}

export default PostItem;