import React from 'react';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../../../components/UiElement/loadingSpinner';
import { useHttpClient } from "../../../hooks/http-hook";
import SearchBar from '../../../components/UiElement/SearchBar';

import PostList from "../../../components/admin/PostList";

function All() {
  const [getPosts, setPosts] = useState([])
  const { isLoading, sendRequest, error, clearError } = useHttpClient();

  const [textFilter, setTextFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    const getPostsData = async () => {
      await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/post/get`)
        .then((response) => {
          setPosts(response.posts)
        });
    }

    getPostsData()
  }, [sendRequest]);

  const postDeleteHandle = (deletePostId) => {
    setPosts(prevPosts => 
      prevPosts.filter(posts => posts._id !== deletePostId)
    );
  };

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
    <React.Fragment>
      {isLoading ? <LoadingSpinner /> :
        <div className='mt-3'>
          <h3 className='text-2xl font-semibold mt-2'>All Posts</h3>
          <SearchBar
            textFilter={textFilter}
            categoryFilter={categoryFilter}
            onTextFilterChange={handleTextFilterChange}
            onCategoryFilterChange={handleCategoryFilterChange}
            categoryProductData={categoryProductData}
          />
          <PostList 
            Productsdata={Productsdata}
            search_parameters={search_parameters}
            categoryProductData={categoryProductData}
            textFilter={textFilter}
            selectFilter={categoryFilter}
            onDelete={postDeleteHandle}
          />
        </div>
      }
    </React.Fragment>
  );
}

export default All;