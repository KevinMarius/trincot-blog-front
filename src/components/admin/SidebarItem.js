import React, { useState } from "react"

export default function SidebarItem({ item, onDeleteToken }) {
    const [open, setOpen] = useState(false)
    const [activeItem, setActiveItem] = useState(false)

    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <div>
                        { item.icon && <i className={item.icon}/> }
                        <span className="ms-2">
                            {item.title}
                        </span>
                    </div>
                    <i className="toggle-btn bi-chevron-down" onClick={() => setOpen(!open)}/>
                </div>
                <div className="sidebar-content">
                    {item.childrens.map((chil, index) => <SidebarItem key={index} item={chil} />)}
                </div>
            </div>
        )
    } else {
        if(item.title === "Logout") {
            return (
                <a onClick={onDeleteToken} className={activeItem ? "sidebar-item plain active" : "sidebar-item plain"}>
                    { item.icon && <i className={item.icon}/>}
                    <span className="ms-2">
                        {item.title}
                    </span>
                </a>
            )
        }
        return (
            <a href={item.path || "#"} className={activeItem ? "sidebar-item plain active" : "sidebar-item plain"}>
                { item.icon && <i className={item.icon}/>}
                <span className="ms-2">
                    {item.title}
                </span>
            </a>
        )
    }

}