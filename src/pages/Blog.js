//========================== import react settings =============================
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

//=========================== import UiElement component ==============================
import CardList from '../components/UiElement/CardList';
import SearchBar from '../components/UiElement/SearchBar';
import Sidebar from '../components/UiElement/Sidebar';

//============================== import hooks =====================================
import { useHttpClient } from '../hooks/http-hook';

const Blogs = () => {
    const [textFilter, setTextFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const { isLoading, sendRequest, error, clearError } = useHttpClient();
    const [getPosts, setPosts] = useState([]);

    useEffect(() => {
        const getPostsData = async () => {
            await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/post/get`)
                .then((response) => {
                    setPosts(response.posts)
                });
        }

        getPostsData();
    }, [sendRequest]);

    const handleTextFilterChange = (textFilter) => {
        setTextFilter(textFilter);
    }
    const handleCategoryFilterChange = (categoryFilter) => {
        setCategoryFilter(categoryFilter)
    }

    const Productsdata = Object.values(getPosts);
    const search_parameters = Object.keys(Object.assign({}, ...Productsdata));
    const categoryProductData = [...new Set(getPosts.map((item) => item.category.title))];

    return <React.Fragment>
        <div className='grid grid-cols-3 w-[100%] px-6 my-6'>
            <div className='col-span-full md:col-span-2 grid grid-cols-2'>
                <SearchBar
                    textFilter={textFilter}
                    categoryFilter={categoryFilter}
                    onTextFilterChange={handleTextFilterChange}
                    onCategoryFilterChange={handleCategoryFilterChange}
                    categoryProductData={categoryProductData}
                />
                <CardList
                    Productsdata={Productsdata}
                    search_parameters={search_parameters}
                    categoryProductData={categoryProductData}
                    textFilter={textFilter}
                    selectFilter={categoryFilter}
                />
            </div>
            <div className='col-span-full md:col-span-1'>
                <Sidebar />
            </div>
        </div>
        <Outlet />
    </React.Fragment>
}

export default Blogs;