import React from 'react';
import ErrorModal from '../UiElement/ErrorModal';
import Modal from '../UiElement/Modal';
import Avatar from '../UiElement/Avatar';

import Button from '../UiElement/button';

import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

const UserItem = (props) => {

    return (
        <React.Fragment>
            <ErrorModal error={props.error} onClear={props.clearError} />
            <Modal
                show={props.showConfirmModal}
                onCancel={props.cancelDeleteHandler}
                header="Are you sure?"
                footerclassName="place-item__modal-actions"
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-2 p-2">
                {props.index + 1}
                </td>
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <div className='w-[20%] h-[20%]'>
                    <Avatar width={60} className="w-[30%] h-64" image={process.env.REACT_APP_ASSET_URL + `/${props.item.picture}`} alt={props.item.title} />
                    </div>
                    <div className="pl-3">
                        <div className="text-base font-semibold">{props.item.name}</div>
                        <div className="font-normal text-gray-500">{props.item.email}</div>
                    </div>
                </th>
                <td className="px-2 py-2">
                {props.item.phone}
                </td>
                <td className="px-2 py-2">
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                    </div>
                </td>
                <td className="px-2 py-2 flex gap-1 align-middle">
                <Button onClick={props.handleEditClick} bgColor="bg-blue-500" bgColorHover="bg-blue-600" className='me-1'><FaPencilAlt className='w-4 h-4' /></Button>
                    <Button onClick={props.showDeleteWarningHandler} bgColor="bg-red-500" bgColorHover="bg-red-600"><FaTrashAlt className='w-4 h-4' /></Button>
                </td>
            </tr>
        </React.Fragment>
    );
}

export default UserItem;