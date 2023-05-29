import React from 'react'

export default function DataSidebar() {
    const datas = [
        {
            "title": "Dashboard",
            "icon": AiFillDashboard,
            "path": "/dashboard/home"
        },
        {
            "title": "Posts",
            "icon": MdArticle,
            "childrens": [
                {
                    "title": "All",
                    "icon": "bi-list-ol",
                    "path": "/dashboard/post/all"
                },
                {
                    "title": "Create",
                    "icon": "bi-bookmark-plus",
                    "path": "/dashboard/post/add"
                }
            ]
        },
        {
            "title": "Users",
            "icon": FaUserAlt,
            "childrens": [
                {
                    "title": "All",
                    "icon": "bi-list-ol",
                    "path": "/dashboard/user/All"
                },
                {
                    "title": "Create",
                    "icon": "bi-person-plus-fill",
                    "path": "/dashboard/user/add"
                }
            ]
        },
        {
            "title": "Categories",
            "icon": MdCategory,
            "childrens": [
                {
                    "title": "All",
                    "icon": "bi-list-ol",
                    "path": "/dashboard/category/All"
                },
                {
                    "title": "Create",
                    "icon": "bi-plus",
                    "path": "/dashboard/category/add"
                }
            ]
        },
        {
            "title": "Roles",
            "icon": FaCriticalRole,
            "childrens": [
                {
                    "title": "All",
                    "icon": "bi-list-ol",
                    "path": "/dashboard/role/All"
                },
                {
                    "title": "Create",
                    "icon": "bi-plus",
                    "path": "/dashboard/role/add"
                }
            ]
        },
        {
            "title": "Logout",
            "icon": MdLogout,
            "path": "/"
        }
    ]

  return datas;
}
