import React from "react";

const SearchBar = (props) => {

  const handleTextFilterChange = (e) => {
    props.onTextFilterChange(e.target.value);
  }

  const handleCategoryFilterChange = (e) => {
    props.onCategoryFilterChange(e.target.value);
  }

  const { textFilter, categoryProductData } = props;
  let items = [];

  if (categoryProductData && categoryProductData.length > 0) {
    categoryProductData.map((category, index) => {
      items.push(<option key={index} value={category} >{category}</option>);
    });
  }

  return (
    <div className="col-span-2 px-2">
      <div className="grid gap-1 grid-cols-2 row-auto">
        <div className=" col-span-full sm:col-span-1">
          <input
            type="search"
            onChange={handleTextFilterChange}
            placeholder="Search"
            name="search"
            value={textFilter}
            id="textFilter"
            className="p-2 w-[100%] my-1 rounded-lg shadow-lg shadow-purple-200 text-sm bottom-0 focus:outline-none focus:shadow-purple-400"
          />
        </div>
        <div className=" col-span-full sm:col-span-1">
          <select
            onChange={handleCategoryFilterChange}
            aria-label="Filter Posts By Category"
            className="p-2 w-[100%] my-1 rounded-lg shadow-lg shadow-purple-200 text-sm bottom-0 focus:outline-none focus:shadow-purple-400"
            name="categorie"
          >
            <option value="">Filter by category</option>
            {items}
          </select>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;