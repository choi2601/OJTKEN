import styled, { css } from 'styled-components';

import SignalCellularNodataIcon from '@mui/icons-material/SignalCellularNodata';

import { TextArea } from '@styles/commonStyle';

const AlertFromWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const CustomNodataIcon = styled(SignalCellularNodataIcon)`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      width: 120px;
      height: 120px;
      color: ${color.gray[500]};
    `;
  }}
`;

const AlertInfo = styled(TextArea)`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      font-size: 22px;
      color: ${color.gray[500]};
    `;
  }}
`;

export { AlertFromWrapper, CustomNodataIcon, AlertInfo };
