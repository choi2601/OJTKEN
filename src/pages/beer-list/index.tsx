import { useState } from 'react';
import styled, { css } from 'styled-components';
import { useQuery } from 'react-query';

import Tooltip from '@components/common/tooltip/Tooltip';
import ProductTable from '@components/common/productTable/ProductTable';
import Pagination from '@components/common/pagination';

import { usePageNumberStore } from '@states/pageNumberStore';
import { axiosProduct } from '@api/base.api';

import type { BeerInfoType } from '@type/beerInfo';

function BeerList() {
  const page = usePageNumberStore((state) => state.page);
  const [searchData, setSearchData] = useState<BeerInfoType[] | null>(null);
  const { data, isLoading } = useQuery(
    ['beer-list', page],
    async () =>
      await axiosProduct.get('', { params: { page } }).then((res) => {
        window.scrollTo(0, 0);
        return res;
      }),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );

  const checkSearchDataEmpty = () => {
    return searchData;
  };

  if (isLoading) return <div>Loading</div>;

  return (
    <BeerListWrapper>
      <Tooltip setSearchData={setSearchData} />
      <ProductTable currentDataInfo={checkSearchDataEmpty() ? searchData : data?.data} />
      <Pagination />
    </BeerListWrapper>
  );
}

export default BeerList;

const BeerListWrapper = styled.section`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      position: relative;
      padding: 10px 80px;
      background-color: ${color.white};
    `;
  }}
`;
