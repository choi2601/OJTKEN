import { useQuery } from 'react-query';

import Tooltip from '@components/common/tooltip/Tooltip';
import ProductTable from '@components/common/productTable/ProductTable';
import Pagination from '@components/common/pagination';

import { usePageNumberStore } from '@states/pageNumberStore';
import { axiosProduct } from '@api/base.api';

import useRange from '@hooks/useRange';

function BeerList() {
  const page = usePageNumberStore((state) => state.page);
  const { searchData, abvRange, handleRangeChange, searchABV, resetABV } = useRange([1, 15]);

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
    <>
      <Tooltip abvRange={abvRange} handleRangeChange={handleRangeChange} searchABV={searchABV} resetABV={resetABV} />
      <ProductTable currentDataInfo={checkSearchDataEmpty() ? searchData : data?.data} sort="beer-list" />
      <Pagination />
    </>
  );
}

export default BeerList;
