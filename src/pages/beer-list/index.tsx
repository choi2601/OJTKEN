import styled from 'styled-components';
import { useQuery } from 'react-query';

import Pagination from '@components/common/pagination';

import { usePageNumberStore } from '@states/pageNumberStore';
import { axiosProduct } from '@api/base.api';

function BeerList() {
  const page = usePageNumberStore((state) => state.page);
  const { data, isLoading } = useQuery(
    ['beer-list', page],
    async () => await axiosProduct.get('', { params: { page } }),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );

  return (
    <BeerListWrapper>
      <div>beerList</div>
      <Pagination />
    </BeerListWrapper>
  );
}

export default BeerList;

const BeerListWrapper = styled.section``;
