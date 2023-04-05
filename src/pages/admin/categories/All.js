import React, { useState, useEffect, useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import CategoryList from "../../../components/admin/CategoryList";

//=========================== import UiElement ========================
import LoadingSpinner from '../../../components/UiElement/loadingSpinner';

//======================= import Hooks ============================
import { useHttpClient } from "../../../hooks/http-hook";

let PageSize = 1;

function All() {
  const [categories, setCategories] = useState("")
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [currentPage, setCurrentPage] = useState(1);
  const page = useParams().page;

  useEffect(() => {
    const getCategoriesData = async () => {
      await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/category/get`)
        .then((response) => {
          setCategories(response.categories)
        });
    }

    getCategoriesData()
  }, [sendRequest]);

  const categoryDeleteHandle = (deleteCategoryId) => {
    setCategories(prevCategory =>
      prevCategory.filter(categories => categories._id !== deleteCategoryId)
    );
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return categories.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <React.Fragment>
      {isLoading ?
        <LoadingSpinner />
        :
        <CategoryList
          onDelete={categoryDeleteHandle}
          categories={categories}
        />
      }
    </React.Fragment>
  );
}

export default All;