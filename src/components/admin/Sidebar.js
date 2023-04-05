import React, { useEffect, useState } from "react"
import SidebarItem from "./SidebarItem"
import items from "../admin/Sidebar.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"


export default function Sidebar({ size, onClick }) {
    const [isNotOpen, setIsNotOpen] = useState(false)
    const handleToggleChange = () => {
        setIsNotOpen(!isNotOpen)
    }

    return (
        <div className={isNotOpen || size ? "sidebar isNotOpen" : "sidebar"}>
            <div className="top-section">
                <h1 className="logo">LOGO</h1>
                <div className="bars">
                    <FontAwesomeIcon icon={faBars} onClick={handleToggleChange}/>
                </div>
            </div>
            { items.map((item, index) => <SidebarItem key={index} onDeleteToken={onClick} isNotOpen={isNotOpen} item={item} /> ) }
        </div>
    )
}