import React, { useEffect, useState, useContext } from "react"
import SidebarItem from "./SidebarItem"

import AuthContext from "../../context/Auth";
import { useHttpClient } from "../../hooks/http-hook";

import { MdLogout, MdCategory, MdArticle, MdList, MdPlaylistAdd } from 'react-icons/md';
import { FaCriticalRole, FaUserAlt } from 'react-icons/fa';
import { AiFillDashboard } from 'react-icons/ai';

export default function Sidebar({ size, onClick, isNotOpen }) {


    const datas = [
        {
            "title": "Dashboard",
            "icon": AiFillDashboard,
            "path": "/dashboard/home",
            "role": []
        },
        {
            "title": "Posts",
            "icon": MdArticle,
            "role": [
                "admin",
                "author"
            ],
            "childrens": [
                {
                    "title": "All",
                    "icon": MdList,
                    "path": "/dashboard/post/all",
                    "role": [
                        "admin",
                        "author"
                    ]
                },
                {
                    "title": "Create",
                    "icon": MdPlaylistAdd,
                    "path": "/dashboard/post/add",
                    "role": [
                        "admin",
                        "author"
                    ]
                }
            ]
        },
        {
            "title": "Users",
            "icon": FaUserAlt,
            "role": [
                "admin",
            ],
            "childrens": [
                {
                    "title": "All",
                    "icon": MdList,
                    "path": "/dashboard/user/All",
                    "role": [
                        "admin"
                    ]
                },
                {
                    "title": "Create",
                    "icon": MdPlaylistAdd,
                    "path": "/dashboard/user/add",
                    "role": [
                        "admin"
                    ]
                }
            ]
        },
        {
            "title": "Categories",
            "icon": MdCategory,
            "role": [
                "admin",
            ],
            "childrens": [
                {
                    "title": "All",
                    "icon": MdList,
                    "path": "/dashboard/category/All",
                    "role": [
                        "admin"
                    ]
                },
                {
                    "title": "Create",
                    "icon": MdPlaylistAdd,
                    "path": "/dashboard/category/add",
                    "role": [
                        "admin"
                    ]
                }
            ]
        },
        {
            "title": "Roles",
            "icon": FaCriticalRole,
            "role": [
                "admin",
            ],
            "childrens": [
                {
                    "title": "All",
                    "icon": MdList,
                    "path": "/dashboard/role/All",
                    "role": [
                        "admin"
                    ]
                },
                {
                    "title": "Create",
                    "icon": MdPlaylistAdd,
                    "path": "/dashboard/role/add",
                    "role": [
                        "admin"
                    ]
                }
            ]
        },
        {
            "title": "Logout",
            "icon": MdLogout,
            "path": "/",
            "role": []
        }
    ]


    return (
        <div className={isNotOpen || size ? "w-16 overflow-auto h-full p-1 m-0 bg-slate-50 transition duration-300" : "w-56 m-0 overflow-auto py-6 h-[100%] bg-slate-50 transi duration-300"}>
            <ul className="font-medium">
            { datas.map((item, index) => <SidebarItem key={index} onDeleteToken={onClick} isNotOpen={isNotOpen} size={size} item={item} /> ) }
            </ul>
        </div>
    )
}
