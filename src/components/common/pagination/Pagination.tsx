import { useCallback, useState } from 'react';
import * as Style from './PaginationStyle';

import { ArrowBack, ArrowForward } from '@mui/icons-material';

import { usePageNumberStore } from '@states/pageNumberStore';

import { DEFAULT_MAX_PAGE, DEFAULT_MIN_PAGE, PER_PAGE, PAGE_RANGE } from './data/paginationData';

function Pagination() {
  const { page, nextPage, prevPage, setPage } = usePageNumberStore();
  const [pageList, setPageList] = useState([1, 2, 3, 4]);

  // filter 결과에 따라 조건부 할당 예정
  const maxPage = DEFAULT_MAX_PAGE;

  const handleSetPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentSelectedPage = Number(e.currentTarget.dataset.num);

    if (currentSelectedPage === page) return;

    setPage(currentSelectedPage);
    window.scrollTo(0, 0);
  };

  const handleNextPage = useCallback(() => {
    if (page < maxPage) {
      const newPage = page + PER_PAGE;
      const rightSide = page % PAGE_RANGE;

      if (rightSide === 0) {
        const newPageList = [];
        const nextSideNumber = newPage + PAGE_RANGE;

        const restNumber = maxPage % PAGE_RANGE === 0 ? PAGE_RANGE : maxPage % PAGE_RANGE;
        const lastNumber = nextSideNumber > maxPage ? newPage + restNumber : nextSideNumber;

        for (let number = newPage; number < lastNumber; number++) {
          newPageList.push(number);
        }
        setPageList(newPageList);
      }

      nextPage();
      window.scrollTo(0, 0);
    }
  }, [page]);

  const handlePrevPage = useCallback(() => {
    if (page > DEFAULT_MIN_PAGE) {
      const newPage = page - PER_PAGE;
      const leftSide = page % PAGE_RANGE;

      if (leftSide === 1) {
        const newPageList = [];
        const nextSideNumber = page - PAGE_RANGE;

        const firstNumber = nextSideNumber <= DEFAULT_MIN_PAGE ? DEFAULT_MIN_PAGE : nextSideNumber;

        for (let number = firstNumber; number <= newPage; number++) {
          newPageList.push(number);
        }

        setPageList(newPageList);
      }

      prevPage();
      window.scrollTo(0, 0);
    }
  }, [page]);

  const checkActive = (num) => {
    if (page === num) return true;

    return false;
  };

  const checkDisabledPage = (currentButtonSort) => {
    if (currentButtonSort === 'first') return page === DEFAULT_MIN_PAGE;

    return page === DEFAULT_MAX_PAGE;
  };

  return (
    <Style.PaginationWrapper>
      <Style.MoveButton onClick={handlePrevPage} disabled={checkDisabledPage('first')}>
        <ArrowBack />
      </Style.MoveButton>
      <Style.PaginationList>
        {pageList.map((num) => {
          return (
            <Style.PaginationItem key={`page-${num}`}>
              <Style.PaginationButton data-num={num} onClick={handleSetPage} isActive={checkActive(num)}>
                {num}
              </Style.PaginationButton>
            </Style.PaginationItem>
          );
        })}
      </Style.PaginationList>
      <Style.MoveButton onClick={handleNextPage} disabled={checkDisabledPage('last')}>
        <ArrowForward />
      </Style.MoveButton>
    </Style.PaginationWrapper>
  );
}

export default Pagination;
