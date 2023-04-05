import Container from 'react-bootstrap/Container';
import React, { useCallback, useState, useMemo } from 'react';
import Cards from './Cards';
import Row from 'react-bootstrap/Row';
import Pagination from './Pagination';

function CardList({ Productsdata, textFilter, selectFilter, search_parameters }) {

  const PageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);

  function search(items) {
    return items.filter((item) =>
      item.category.title.includes(selectFilter) && search_parameters.some((parameter) =>
        item[parameter]?.toString().toLowerCase().includes(textFilter)
      )
    );
  }

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return search(Productsdata).slice(firstPageIndex, lastPageIndex);
  }, [currentPage, search]);

  const displayPage = currentTableData.map((item, index) => {
    return <Cards key={index} index={index} product={item} />
  });

  /* const displayPage = search(Productsdata).map((item, index) => {
    return <Cards key={index} index={index} product={item} />
  }) */

  return (
    <React.Fragment>
      <div className='col-span-2'>
        <div className='grid grid-cols-2'>
            {displayPage}
        </div>
        {<Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={Productsdata.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
        />}
      </div>
    </React.Fragment>
  );

}

export default CardList;