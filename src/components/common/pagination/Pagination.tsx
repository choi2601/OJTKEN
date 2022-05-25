import { useState } from 'react';
import * as Style from './PaginationStyle';

import { DEFAULT_MAX_PAGE, DEFAULT_MIN_PAGE, PER_PAGE, PAGE_RANGE } from './data/paginationData';

function Pagination() {
  const [currentPage, setCurrentPage] = useState(DEFAULT_MIN_PAGE);
  const [item, setItem] = useState([1, 2, 3, 4]);

  // filter 결과에 따라 조건부 할당 예정
  const maxPage = DEFAULT_MAX_PAGE;

  const handleSetPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentSelectedPage = Number(e.currentTarget.dataset.num);

    if (currentSelectedPage === currentPage) return;

    setCurrentPage(currentSelectedPage);
  };

  const handleNextPage = () => {
    if (currentPage < maxPage) {
      const newPage = currentPage + PER_PAGE;
      const rightSide = currentPage % PAGE_RANGE;

      if (rightSide === 0) {
        const newItem = [];
        const nextSideNumber = newPage + PAGE_RANGE;

        const restNumber = maxPage % PAGE_RANGE === 0 ? PAGE_RANGE : maxPage % PAGE_RANGE;
        const lastNumber = nextSideNumber > maxPage ? newPage + restNumber : nextSideNumber;

        for (let number = newPage; number < lastNumber; number++) {
          newItem.push(number);
        }
        setItem(newItem);
      }

      setCurrentPage(newPage);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > DEFAULT_MIN_PAGE) {
      const newPage = currentPage - PER_PAGE;
      const leftSide = currentPage % PAGE_RANGE;

      if (leftSide === 1) {
        const newItem = [];
        const nextSideNumber = currentPage - PAGE_RANGE;

        const firstNumber = nextSideNumber <= DEFAULT_MIN_PAGE ? DEFAULT_MIN_PAGE : nextSideNumber;

        for (let number = firstNumber; number <= newPage; number++) {
          newItem.push(number);
        }

        setItem(newItem);
      }

      setCurrentPage(newPage);
    }
  };

  const checkActive = (num) => {
    if (currentPage === num) return true;

    return false;
  };

  const checkFirstPage = () => {
    if (currentPage === DEFAULT_MIN_PAGE) return true;

    return false;
  };

  const checkLastPage = () => {
    if (currentPage === DEFAULT_MAX_PAGE) return true;

    return false;
  };

  return (
    <Style.PaginationWrapper>
      <Style.MoveButton onClick={handlePrevPage} disabled={checkFirstPage()}>
        <Style.ArrowIcon src="/icon/icon-left_arrow.svg" />
      </Style.MoveButton>
      <Style.PaginationList>
        {item.map((num) => {
          return (
            <Style.PaginationItem key={`page-${num}`}>
              <Style.PaginationButton data-num={num} onClick={handleSetPage} isActive={checkActive(num)}>
                {num}
              </Style.PaginationButton>
            </Style.PaginationItem>
          );
        })}
      </Style.PaginationList>
      <Style.MoveButton onClick={handleNextPage} disabled={checkLastPage()}>
        <Style.ArrowIcon src="/icon/icon-right_arrow.svg" alt="icon-right_arrow" />
      </Style.MoveButton>
    </Style.PaginationWrapper>
  );
}

export default Pagination;
