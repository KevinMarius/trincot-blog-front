import React, { useContext, useState } from 'react';

import AuthContext from '../context/Auth';

export default function Gate({role = [], children}) {
  const [currentUser, setCurrentUser] = useContext(AuthContext); 
  var authorized = false;
  console.log(role);
  if(role.length === 0) {
    return children;
  }
  
  role.forEach(element => {
    if(element == currentUser.userData.userExist.role.title) {
      authorized = true;
    }
  });

  if(authorized) {
    return children;
  }
}
