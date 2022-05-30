import styled, { css } from 'styled-components';

import { TextArea } from '@styles/commonStyle';

const AlertFromWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
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

export { AlertFromWrapper, AlertInfo };
