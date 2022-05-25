import { dehydrate, QueryClient } from 'react-query';
import styled from 'styled-components';

import Pagination from '@components/common/pagination/Pagination';

import { axiosProduct } from '@api/base.api';

function BeerList() {
  return (
    <BeerListWrapper>
      <div>beerList</div>
      <Pagination />
    </BeerListWrapper>
  );
}

export async function getServerSideProps(context) {
  let page = 1;

  if (context.query.page) page = parseInt(context.query.page);

  const queryClient = new QueryClient();
  const params = { page };

  await queryClient.prefetchQuery(
    ['beerList', page],
    async () => await axiosProduct.get('', { params }).then((res) => res.data),
  );

  return { props: { dehydratedState: dehydrate(queryClient) } };
}

export default BeerList;

const BeerListWrapper = styled.section``;
