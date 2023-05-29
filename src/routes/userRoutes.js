import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blog";
import Contact from "../pages/Contact";
import BlogDetail from "../pages/BlogDetail";
import Post from '../components/Post'
import Customer from "../Customer"
import NoPage from "../pages/NoPage"
import Category from "../components/Category";
import CategoriePost from "../pages/CategoriePost";

export default function UserRoute() {
    return (
        <Routes>
            <Route path="/" element={<Customer />} >
                <Route path="/" element={<Home />} />
                <Route path="blog" element={<Blogs />} />
                <Route path="blog/post" element={<Post />} >
                    <Route path=":postId" element={<BlogDetail />} />
                </Route>
                <Route path="blog/category" element={<Category />} >
                    <Route path=":categoryId" element={<CategoriePost />} />
                </Route>
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    )
}