import { useState } from 'react';

import { axiosProduct } from '@api/base.api';

import type { BeerInfoType } from '@type/beerInfo';

function useRange(range: number[]) {
  const [searchData, setSearchData] = useState<BeerInfoType[] | null>(null);
  const [abvRange, setAbvRange] = useState<number[]>(range);

  const handleRangeChange = (e: Event, newValue: number | number[]) => {
    setAbvRange(newValue as number[]);
  };

  const searchABV = async () => {
    const params = {
      abv_gt: abvRange[0],
      abv_lt: abvRange[1] + 1,
    };

    const { data } = await axiosProduct.get('', { params });
    setSearchData(data);
  };

  const resetABV = () => {
    const resetRange = [1, 15];
    setAbvRange(resetRange);
    setSearchData(null);
  };

  return { searchData, abvRange, handleRangeChange, searchABV, resetABV };
}

export default useRange;
