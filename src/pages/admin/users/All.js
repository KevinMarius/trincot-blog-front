import React, { useState, useEffect, useContext } from 'react';
import LoadingSpinner from '../../../components/UiElement/loadingSpinner';
import AuthContext from "../../../context/Auth";

import UserList from '../../../components/admin/UserList';

import { useHttpClient } from "../../../hooks/http-hook";
import ErrorModal from '../../../components/UiElement/ErrorModal';

function All() {
  const [users, setUsers] = useState([])
  const { isLoading, sendRequest, error, clearError } = useHttpClient();
  const [currentUser, setCurrentUser] = useContext(AuthContext);

  useEffect(() => {
    const getUserData = async () => {
      const token = currentUser.userData.token;
      await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/user/get`, 'get', null, {
        "Authorization": "Bearer " + token
      })
        .then((response) => {
          setUsers(response.users);
        });
    }

    getUserData()
  }, [sendRequest]);

  const userDeleteHandle = (deleteUserId) => {
    setUsers(prevUsers => 
      prevUsers.filter(users => users._id !== deleteUserId)
    );
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      { isLoading ? <LoadingSpinner /> : <UserList onDelete={userDeleteHandle} users={users} /> }
    </React.Fragment>
  );
}

export default All;