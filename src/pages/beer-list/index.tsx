import { useQuery } from 'react-query';

import Tooltip from '@components/common/tooltip/Tooltip';
import ProductTable from '@components/common/productTable/ProductTable';
import Pagination from '@components/common/pagination';

import { usePageNumberStore } from '@states/pageNumberStore';
import { axiosProduct } from '@api/base.api';

import useRange from '@hooks/useRange';

function BeerList() {
  const page = usePageNumberStore((state) => state.page);
  const { confirmAbvRange, abvRange, handleRangeChange, searchABV, resetABV } = useRange([1, 15]);

  const { data } = useQuery(
    ['beer-list', page, confirmAbvRange],
    async () =>
      await axiosProduct.get('', { params: { page, ...confirmAbvRange } }).then((res) => {
        window.scrollTo(0, 0);
        return res;
      }),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );

  return (
    <>
      <Tooltip abvRange={abvRange} handleRangeChange={handleRangeChange} searchABV={searchABV} resetABV={resetABV} />
      <ProductTable currentDataInfo={data?.data} sort="beer-list" />
      <Pagination />
    </>
  );
}

export default BeerList;
