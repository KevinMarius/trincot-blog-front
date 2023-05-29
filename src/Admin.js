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

//================================= import UiElement component =============================
import Navbars from "./components/UiElement/Navbar/Admin/Navbar";

import Nav from "./components/UiElement/Navbar/Admin/Nav";

//================================= import context ======================================
import AuthContext from './context/Auth'

function Admin() {
  const [currentUser, setCurrentUser] = useContext(AuthContext);
  const [isNotOpen, setIsNotOpen] = useState(false)
    const handleToggleChange = () => {
        setIsNotOpen(!isNotOpen)
    }
  const navigate = useNavigate();


  const handleLogoutClick = () => {
    localStorage.removeItem('userLogged');
    setCurrentUser(null);

    navigate("/");
  };

  const handleProfileClick = () => {
    navigate(`/dashboard/user/profile`);
  }

  const size = useMediaPredicate("(max-width: 767px)");

  return (
    <React.Fragment>
      <div className="w-full flex">
        <Nav profile={handleProfileClick} user={currentUser.userData.userExist} onClickable={handleToggleChange} onClick={handleLogoutClick} />
      </div>
      <div className="flex bg-slate-100 h-screen">
        <div className={isNotOpen || size ? "w-16" : "md:w-56"}>
          <Sidebar size={size} isNotOpen={isNotOpen} onClick={handleLogoutClick} />
        </div>
        <div className="flex justify-center w-5/6 p-4">
          <Outlet />
        </div>
      </div>

      <footer />
    </React.Fragment>
  );
}

export default Admin;
