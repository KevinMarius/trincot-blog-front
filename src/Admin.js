//import logo from './logo.svg';
//================================== import react settings ===================================
import { BrowserRouter as Router, useNavigate, Outlet } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";

//================================= import CSS Files ===============================
import "./App.css";
import "./assets/Sidebar.css"

import Sidebar from "./components/admin/Sidebar";
import footer from "./components/UiElement/Footer/Admin/User/Footer";
import React, { useState, useContext } from "react";
import Container from 'react-bootstrap/Container';

//================================= import UiElement component =============================
import Navbars from "./components/UiElement/Navbar/Admin/Navbar";

//================================= import context ======================================
import AuthContext from './context/Auth'

function Admin() {
  const [ currentUser, setCurrentUser ] = useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogoutClick = () => {
    localStorage.removeItem('userLogged');
    setCurrentUser(null);
    
    navigate("/");
  };

  const handleProfileClick = () => {
    navigate(`/dashboard/user/profile`);
  }

  const size = useMediaPredicate("(max-width: 800px)");

  return (
    <React.Fragment>
      <Container fluid className="main">
        <div>
          <Sidebar size={size} onClick={handleLogoutClick} />
        </div>
        <div className="right-content">
          <div>
            <Navbars profile={handleProfileClick} user={currentUser.userData.userExist} onClick={handleLogoutClick} />
          </div>
          <div className="bodyContent">
            <Outlet />
          </div>
        </div>
        <footer />
      </Container>
    </React.Fragment>
  );
}

export default Admin;
