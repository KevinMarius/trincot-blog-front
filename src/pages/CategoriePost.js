import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Sidebar from '../components/UiElement/Sidebar';
import SearchBar from '../components/UiElement/SearchBar';
import CardList from '../components/UiElement/CardList';

import { useHttpClient } from '../hooks/http-hook';

export default function CategoriePost() {

    const [textFilter, setTextFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const { isLoading, sendRequest, error, clearError } = useHttpClient();
    const [getPosts, setPosts] = useState([]);
    const categoryId = useParams().categoryId;

    useEffect(() => {
        const getPostsData = async () => {
            await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/post/getPostByCategory/${categoryId}`)
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

    return (
        <div className='grid'>
            <h2 className="text-3xl text-zinc-700 font-semibold mt-6 ml-6">{Productsdata[0]?.category.title}</h2>
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
        </div>
    )
}
