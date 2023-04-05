import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import HomeAdmin from "../pages/admin/HomeAdmin";
import PostsAll from "../pages/admin/posts/All";
import UsersAll from "../pages/admin/users/All";
import CategoriesAll from "../pages/admin/categories/All";
import PostCreate from "../pages/admin/posts/Create";
import CategoryCreate from "../pages/admin/categories/Create";
import UserCreate from "../pages/admin/users/Create";
import UserProfile from "../pages/admin/users/profile";
import CategoryUpdate from "../pages/admin/categories/update";
import UserUpdate from "../pages/admin/users/update";
import PostUpdate from "../pages/admin/posts/update";
import Post from "../components/Post";
import User from "../components/User";
import Admin from "../Admin"
import NoPage from "../pages/NoPage"
import Category from "../components/Category";

export default function AdminRoute() {
    const { categoryId } = useParams();
    return (
        <Routes>
            <Route path="/" element={<Admin />}>
                <Route path="home" element={<HomeAdmin />} />
                <Route path="post" element={<Post />} >
                    <Route path="all" element={<PostsAll />} />
                    <Route path="Add" element={<PostCreate />} />
                    <Route path="update/:postId" element={<PostUpdate />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
                <Route path="category" element={<Category />} >
                    <Route path="all" element={<CategoriesAll />} />
                    <Route path="add" element={<CategoryCreate />} />
                    <Route path="update/:categoryId" element={<CategoryUpdate />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
                <Route path="user" element={<User />} >
                    <Route path="all" element={<UsersAll />} />
                    <Route path="profile" element={<UserProfile />} />
                    <Route path="add" element={<UserCreate />} />
                    <Route path="update/:userId" element={<UserUpdate />} />
                    <Route path="update" element={<UserUpdate />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
                <Route path="*" element={<NoPage />} />
            </Route>
            <Route path="*" element={<NoPage />} />
        </Routes>
    )
}