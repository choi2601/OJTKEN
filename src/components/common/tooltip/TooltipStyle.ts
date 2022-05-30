import styled, { css } from 'styled-components';

import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import { TextArea } from '@styles/commonStyle';

const TooltipWrapper = styled.section`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      margin-top: 100px;
      padding-bottom: 40px;
      border-bottom: 1px solid ${color.gray[500]};
    `;
  }}
`;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
`;

const TooltipButton = styled.button`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      display: flex;
      align-items: center;
      margin-left: 15px;
      padding: 10px 20px;
      background: none;
      border: 1.2px solid ${color.gray[500]};
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        border: 1.2px solid ${color.blue[400]};

        & > p {
          color: ${color.blue[400]};
        }

        & > svg {
          color: ${color.blue[400]};
        }
      }
    `;
  }}
`;

const SearchInfo = styled(TextArea)`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      color: ${color.gray[500]};
    `;
  }}
`;

const CustomSearchIcon = styled(SearchIcon)`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      margin-left: 5px;
      color: ${color.gray[500]};
    `;
  }}
`;

const CustomResetIcon = styled(RestartAltIcon)`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      margin-left: 5px;
      color: ${color.gray[500]};
    `;
  }}
`;

export { TooltipWrapper, SliderWrapper, TooltipButton, SearchInfo, CustomSearchIcon, CustomResetIcon };
