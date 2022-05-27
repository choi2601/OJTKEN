import styled from 'styled-components';
import { useQuery } from 'react-query';

import ProductTable from '@components/common/productTable/ProductTable';
import Pagination from '@components/common/pagination';

import { usePageNumberStore } from '@states/pageNumberStore';
import { axiosProduct } from '@api/base.api';

function BeerList() {
  const page = usePageNumberStore((state) => state.page);
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

  if (isLoading) return <div>Loading</div>;

  return (
    <BeerListWrapper>
      <ProductTable currentDataInfo={data?.data} />
      <Pagination />
    </BeerListWrapper>
  );
}

export default BeerList;

const BeerListWrapper = styled.section`
  position: relative;
  padding: 10px 80px;
`;
