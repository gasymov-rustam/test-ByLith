import { memo, useCallback } from 'react';
import ReactPaginate from 'react-paginate';

import { useGlobalContext } from '../../app';
import { useCountOnPage } from '../../shared';

import cls from './Pagination.module.scss';

export const Pagination = memo(() => {
  const count = useCountOnPage();
  const { state, methods } = useGlobalContext();
  const { data, currentPage } = state;
  const products = data?.data;
  const pageCount = Math.ceil(products?.length / count);
  // const [value, setValue] = useSearchParamsState({ name: 'page' });

  const handlePageClick = useCallback(
    ({ selected }) => {
      methods.setCurrentPage(selected + 1);
      // setValue(selected + 1);
    },
    [methods],
  );

  // useEffect(() => {
  //   setValue(currentPage);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  if (!pageCount) return null;

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
      activeLinkClassName={cls.activeLink}
      pageLinkClassName={cls.pageLink}
      disabledClassName={cls.disabled}
      previousClassName={cls.previous}
      nextClassName={cls.next}
      pageClassName={cls.page}
      forcePage={currentPage - 1}
    />
  );
});
