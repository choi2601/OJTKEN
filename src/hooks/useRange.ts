import { useState } from 'react';

import { usePageNumberStore } from '@states/pageNumberStore';

function useRange(range: number[]) {
  const { resetPage } = usePageNumberStore();

  const [confirmAbvRange, setConfirmAbvRange] = useState<{ abv_gt: number; abv_lt: number } | null>(null);
  const [abvRange, setAbvRange] = useState<number[]>(range);

  const handleRangeChange = (e: Event, newValue: number | number[]) => {
    setAbvRange(newValue as number[]);
  };

  const searchABV = async () => {
    const params = {
      abv_gt: abvRange[0],
      abv_lt: abvRange[1] + 1,
    };

    setConfirmAbvRange(params);
  };

  const resetABV = () => {
    const resetRange = [1, 15];
    setAbvRange(resetRange);
    setConfirmAbvRange(null);
    resetPage();
  };

  return { confirmAbvRange, abvRange, handleRangeChange, searchABV, resetABV };
}

export default useRange;
