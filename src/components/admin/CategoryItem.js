import React from 'react';
import ErrorModal from '../UiElement/ErrorModal';
import Modal from '../UiElement/Modal';

import Button from '../UiElement/button';

import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

const CategoryItem = (props) => {

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
                        <Button width="[50%]" outlineColor="blue-600" bgColorHover="bg-blue-400" onClick={props.onCancel}>
                            Cancel
                        </Button>
                        <Button width="[50%]" bgColor="bg-red-500" onClick={props.onDelete}>
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="px-4 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {props.index + 1}
                </td>
                <td className="px-4 py-1 font-bold">
                    {props.item.title}
                </td>
                <td className="px-4 py-1">
                    {props.item.description}
                </td>
                <td className="px-4 py-1 flex gap-1 text-right">
                    <Button onClick={props.handleEditClick} bgColor="bg-blue-500" bgColorHover="bg-blue-600" className='me-1'><FaPencilAlt className='w-4 h-4'/></Button>
                    <Button onClick={props.showDeleteWarningHandler} bgColor="bg-red-500" bgColorHover="bg-red-600"><FaTrashAlt className='w-4 h-4'/></Button>
                </td>
            </tr>
        </React.Fragment>
    );
}

export default CategoryItem;