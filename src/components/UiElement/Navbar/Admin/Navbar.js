import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';

import "../../../../assets/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons"

export default function Navbars(props) {

    return (
        <nav className="navbars">
            <div className="navbar-content">
                <div className="navbar-search">
                    <form className="d-flex" role="search">
                        <div className="input-group">
                            <input type="search" className="form-control" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                        </div>
                    </form>
                </div>
                <ul className="nav">
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            <FontAwesomeIcon icon={faBell} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            {props.user.name}
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <div onClick={props.profile}>Profile</div>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <div onClick={props.onClick}>Logout</div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ul>
            </div>
        </nav>
    )
}