import React, { useState, Dispatch, SetStateAction } from 'react';
import * as Style from './TooltipStyle';

import Slider from '@mui/material/Slider';

import type { BeerInfoType } from '@type/beerInfo';
import { axiosProduct } from '@api/base.api';

interface TooltipProps {
  setSearchData: Dispatch<SetStateAction<BeerInfoType[]>>;
}

function Tooltip({ setSearchData }: TooltipProps) {
  const [abvRange, setAbvRange] = useState<number[]>([1, 15]);

  const handleChange = (event: Event, newValue: number | number[]) => {
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

  const resetABV = (e: React.MouseEvent<HTMLButtonElement>) => {
    const resetRange = [1, 15];
    setAbvRange(resetRange);
    setSearchData(null);
  };

  return (
    <Style.TooltipWrapper>
      <Style.SliderWrapper>
        <Slider
          getAriaLabel={() => 'Minimum distance'}
          min={1}
          max={55}
          value={abvRange}
          onChange={handleChange}
          valueLabelDisplay="auto"
          disableSwap
        />
        <Style.TooltipButton onClick={searchABV}>
          <Style.SearchInfo sort="Roboto-Bold" size="18px">
            ABV
          </Style.SearchInfo>
          <Style.CustomSearchIcon />
        </Style.TooltipButton>
        <Style.TooltipButton onClick={resetABV}>
          <Style.SearchInfo sort="Roboto-Bold" size="18px">
            Reset
          </Style.SearchInfo>
          <Style.CustomResetIcon />
        </Style.TooltipButton>
      </Style.SliderWrapper>
    </Style.TooltipWrapper>
  );
}

export default Tooltip;
