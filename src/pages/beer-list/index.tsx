import styled from 'styled-components';
import { useQuery } from 'react-query';

import CardBoard from '@components/common/cardBoard';
import Pagination from '@components/common/pagination';

import { usePageNumberStore } from '@states/pageNumberStore';
import { axiosProduct } from '@api/base.api';

import type { BeerInfoType } from '@type/beerInfo';

function BeerList() {
  const page = usePageNumberStore((state) => state.page);
  const { data, isLoading } = useQuery(
    ['beer-list', page],
    async () => await axiosProduct.get('', { params: { page } }).then((res) => res.data),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <BeerListWrapper>
      <ProductList>
        {data.map((item: BeerInfoType) => {
          return (
            <ProductItem key={`${item.id}-${item.name}`}>
              <CardBoard item={item} />
            </ProductItem>
          );
        })}
      </ProductList>
      <Pagination />
    </BeerListWrapper>
  );
}

export default BeerList;

const BeerListWrapper = styled.section`
  position: relative;
  padding: 10px 20px;
`;

const ProductList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  margin-top: 120px;
`;

const ProductItem = styled.li`
  width: 40%;
`;
