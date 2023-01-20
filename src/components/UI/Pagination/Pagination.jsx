import MyButton from "../button/MyButton.jsx";
import React from "react";
import usePagination from "../../../hooks/usePagination.js";

const Pagination = ({totalPages, changePage, currentPage}) => {
    const pageArray = usePagination(totalPages);
    return (
        <div className='PostNavigationBlock'>
            {pageArray.map(p => <MyButton key={p} addClass={currentPage !== p ? 'inactiveBtn' : ''} onClick={() => changePage(p)}>
                {p}
            </MyButton>)}
        </div>
    );
};

export default Pagination;