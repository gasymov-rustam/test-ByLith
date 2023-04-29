import { memo, useCallback } from 'react';
import ReactPaginate from 'react-paginate';

import { useGlobalContext } from '../../app';
import { useCountOnPage } from '../../shared';

import cls from './Pagination.module.scss';

export const Pagination = memo(() => {
  const count = useCountOnPage();
  const { state, methods } = useGlobalContext();
  const { data } = state;
  const products = data?.data;
  const pageCount = Math.ceil(products?.length / count);

  const handlePageClick = useCallback(
    ({ selected }) => {
      methods.setCurrentPage(selected + 1);
    },
    [methods],
  );

  return (
    <ReactPaginate
      breakLabel={null}
      nextLabel="Next >"
      previousLabel="< Prev"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      marginPagesDisplayed={0}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      containerClassName={cls.pagination}
      activeLinkClassName={cls.previous}
      pageLinkClassName={cls.pageLink}
      disabledClassName={cls.disabled}
      previousClassName={cls.previous}
      nextClassName={cls.previous}
    />
  );
});
