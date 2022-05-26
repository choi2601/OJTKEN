import styled, { css } from 'styled-components';

import { FlexBox, ButtonCenter } from '@styles/commonStyle';

const PaginationWrapper = styled(FlexBox)`
  width: fit-content;
  margin: 0 auto;
`;

const PaginationList = styled.ul`
  display: flex;
  margin: 0 20px;
`;

const PaginationItem = styled.li`
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`;

const PaginationButton = styled(ButtonCenter)<{ isActive?: boolean }>`
  ${({ theme, isActive }) => {
    const { color } = theme;

    return css`
      width: 50px;
      height: 50px;
      border: ${isActive ? `1.5px solid ${color.blue[400]}` : `1px solid ${color.gray[500]}`};
      border-radius: 5px;
      font-family: ${isActive && 'Roboto-Bold'};
      font-size: 15px;
      color: ${isActive && color.blue[400]};
      background-color: ${color.gray[100]};
      cursor: pointer;

      &:hover {
        border: 1px solid ${color.blue[300]};
        color: ${color.blue[300]};
      }
    `;
  }}
`;

const MoveButton = styled(PaginationButton)`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      &:hover {
        & > svg {
          color: ${color.blue[300]};
        }
      }

      &:disabled {
        border: 1px solid ${color.gray[400]};
        cursor: not-allowed;

        & > svg {
          color: ${color.gray[400]};
        }
      }
    `;
  }}
`;

export { PaginationWrapper, PaginationList, PaginationItem, PaginationButton, MoveButton };
