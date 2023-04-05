//import logo from './logo.svg';
import "./App.css";
import "./assets/Sidebar.css"
import NavBars from "./components/UiElement/Navbar/User/NavBar";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Admin from "./Admin";
import Footer from './components/UiElement/Footer/User/Footer'

function Customer() {

    return (
        <React.Fragment>
            <NavBars />
            <Outlet />
            <Footer />
        </React.Fragment>
    );
}

export default Customer;
