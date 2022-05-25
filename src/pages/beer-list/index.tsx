import { dehydrate, QueryClient } from 'react-query';

import { axiosProduct } from '@api/base.api';

function BeerList() {
  return <div>beerList</div>;
}

export async function getServerSideProps(context) {
  let page = 1;

  if (context.query.page) {
    page = parseInt(context.query.page);
  }

  const queryClient = new QueryClient();
  const params = { page };

  await queryClient.prefetchQuery(
    ['beerList', page],
    async () => await axiosProduct.get('', { params }).then((res) => res.data),
  );

  return { props: { dehydratedState: dehydrate(queryClient) } };
}

export default BeerList;
