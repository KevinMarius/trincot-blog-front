import React from 'react';
import ErrorModal from '../UiElement/ErrorModal';
import Modal from '../UiElement/Modal';
import Avatar from '../UiElement/Avatar';

import Button from '../UiElement/button';

const UserItem = (props) => {

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
            <tr>
                <td className='text-center align-middle'>{props.index + 1}</td>
                <td className='text-center align-middle'><Avatar image={process.env.REACT_APP_ASSET_URL + `/${props.item.picture}`} width={80} alt={props.item.name} /></td>
                <td className='text-center align-middle'>{props.item.name}</td>
                <td className='text-center align-middle'>{props.item.phone}</td>
                <td className='text-center align-middle font-weight-bold'>{props.item.role.title}</td>
                <td className='text-center align-middle'>
                    <Button onClick={props.handleEditClick} inverse  className='me-1'>Edit</Button>
                    <Button onClick={props.showDeleteWarningHandler} danger>Delete</Button>
                </td>
            </tr>
        </React.Fragment>
    );
}

export default UserItem;