import React, { useState } from "react";

import DynamiqueIcon from "../UiElement/DynamiqueIcon";

import { MdLogout, MdCategory } from 'react-icons/md';
import { FaCriticalRole, FaUserAlt } from 'react-icons/fa';
import { AiFillDashboard } from 'react-icons/ai';
import Gate from "../../utils/Gate";

export default function SidebarItem({ item, onDeleteToken, isNotOpen, size }) {
    const [open, setOpen] = useState(false)
    const [activeItem, setActiveItem] = useState(false);

    const Icon = item.icon;

    if (item.childrens) {
        return (
            <Gate role={item.role}>
                <li>
                    <button type="button" className="flex items-start justify-center md:items-center w-full p-2 md:p-3 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setOpen(!open)}>
                        <Icon className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                        <span className="hidden md:block flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>{isNotOpen || size ? '' : item.title}</span>
                        <svg sidebar-toggle-item={true} className="hidden md:block w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <ul className={open ? "bg-white flex flex-col m-2 p-1 rounded-md transition-all duration-300" : "hidden py-2 space-y-2 "}>
                        <li>{item.childrens.map((chil, index) => <SidebarItem key={index} item={chil} />)}</li>
                    </ul>
                </li>
            </Gate>
        )
    } else {
        if (item.title === "Logout") {

            return (
                <li >
                    <a href={item.path} className="flex items-start justify-center md:items-center p-2 md:p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Icon className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                        <span className="hidden md:block flex-1 ml-3 whitespace-nowrap">{isNotOpen || size ? '' : item.title}</span>
                    </a>
                </li>
            )
        }
        return (
            <li >
                <Gate role={item.role}>
                    <a href={item.path} className="flex items-start justify-center md:items-center p-2 md:p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Icon className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                        <span className="hidden md:block flex-1 ml-3 whitespace-nowrap">{isNotOpen || size ? '' : item.title}</span>
                    </a>
                </Gate>
            </li >
        )
    }

}