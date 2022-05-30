import React from 'react';
import * as Style from './TooltipStyle';

import Slider from '@mui/material/Slider';

interface TooltipProps {
  abvRange: number[];
  handleRangeChange: (e: Event, newValue: number | number[]) => void;
  searchABV: () => void;
  resetABV: () => void;
}

function Tooltip({ abvRange, handleRangeChange, searchABV, resetABV }: TooltipProps) {
  return (
    <Style.TooltipWrapper>
      <Style.SliderWrapper>
        <Slider
          getAriaLabel={() => 'Minimum distance'}
          min={1}
          max={55}
          value={abvRange}
          onChange={handleRangeChange}
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
