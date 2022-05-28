import styled, { css } from 'styled-components';

import ClearIcon from '@mui/icons-material/Clear';

import { ButtonCenter } from '@styles/commonStyle';

const BodyBlackoutStyle = styled.div`
  ${({ theme }) => {
    const { layer } = theme;

    return css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: ${layer.background};
      cursor: pointer;
    `;
  }}
`;

const ModalTemplate = styled.div<{ isShowing: boolean }>`
  ${({ theme, isShowing }) => {
    const {
      layer,
      animation: { modalIn },
    } = theme;

    return css`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      visibility: ${isShowing ? 'visible' : 'hidden'};
      z-index: ${layer.contents};
      ${modalIn(0.4)};
    `;
  }}
`;

const Inner = styled.div`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      position: relative;
      padding: 1.5rem;
      text-align: right;
      border: 1px ${color.gray[500]} solid;
      border-radius: 2px;
      background-color: ${color.white};
    `;
  }}
`;

const DeleteButton = styled(ButtonCenter)`
  display: inline-block;
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

const DeleteCustomIcon = styled(ClearIcon)`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      color: ${color.gray[600]};
    `;
  }}
`;

export { BodyBlackoutStyle, ModalTemplate, Inner, DeleteButton, DeleteCustomIcon };
