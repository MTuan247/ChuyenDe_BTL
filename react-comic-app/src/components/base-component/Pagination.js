import React from "react";
import Pagination from "pagination-component";

import '../../css/reuse-component/pagination.scss'

export default function Paginator({ pageNumber = 1, totalPage = 10, onChange = () => {} }) {
  return (
    <div className="pagination-container">
      <Pagination initialPage={1} show={5} pageCount={totalPage == 0 ? 1 : totalPage } onChange={page => onChange(page)}>
        {({ setPage, page, index, currentPage, isPrev, isNext, isCurrentPage }) => {
          if (isPrev)
            return (
              <div className="pagination-control pagination-item prev" onClick={() => setPage({ prev: true })}>
                Trước
              </div>
            );

          if (isNext)
            return (
              <div className="pagination-control pagination-item next" onClick={() => setPage({ next: true })}>
                Sau
              </div>
            );

          return (
            <div
              key={index}
              className={"pagination-item " + (isCurrentPage ? "active" : "")}
              onClick={() => {
                setPage({ page });
              }}>
              <div className="pagination-number">{page}</div>
            </div>
          );
        }}
      </Pagination>
    </div>
  )
};