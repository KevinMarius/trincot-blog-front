import React, { useContext } from 'react';
import ErrorModal from '../UiElement/ErrorModal';
import Modal from '../UiElement/Modal';

import Button from '../UiElement/button';
import Avatar from '../UiElement/Avatar';

import { FaTrashAlt } from 'react-icons/fa'

const PostItem = (props) => {
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
            <Button bgColor="bg-blue-400" onClick={props.onCancel}>
              Cancel
            </Button>
            <Button bgColor="bg-red-400" onClick={props.onDelete}>
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
        <td className="w-3 p-2">
          {props.index + 1}
        </td>
        <td className=" w-20 p-2">
          <Avatar image={process.env.REACT_APP_ASSET_URL + `/${props.item.picture}`} width={60} alt={props.item.title} />
        </td>
        <td className="px-6 py-2 font-bold text-gray-900 dark:text-white">
          {props.item.title}
        </td>
        <td className="px-6 py-2 font-normal text-gray-900 dark:text-white">
          {props.item.content}
        </td>
        <td className="px-6 py-2 font-bold text-gray-900 dark:text-white">
          {
            props.state ? <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300"><i className='bi-check2-all' /></span> : <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300"><i className='bi-x-octagon' /></span>
          }
        </td>
        <td className="px-6 py-2">
          {
            props.item.author._id === props.currentUserId ?
              <Button onClick={props.handleEditClick} inverse className='btn btn-primary me-1'>Edit</Button> :
              ''
          }
          <Button width="auto" bgColor="bg-red-500" bgColorHover="bg-red-400" onClick={props.showDeleteWarningHandler}><FaTrashAlt className='w-4 h-4' /></Button>
        </td>
      </tr>

      {/* <tr key={props.item._id}>
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
            </tr> */}
    </React.Fragment>
  );
}

export default PostItem;