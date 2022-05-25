import styled, { css } from 'styled-components';

const LabelToLinkWrapper = styled.li<{ isActive: boolean }>`
  ${({ theme, isActive }) => {
    const { color } = theme;

    return css`
      padding: 25px;
      border: none;
      font-size: 17px;
      color: ${color.white};
      background-color: ${isActive ? color.blue[700] : 'inherit'};
      transition: ease background-color 200ms;
      cursor: pointer;

      &:hover {
        background-color: ${color.blue[500]};
      }
    `;
  }}
`;
const CustomLink = styled.a``;

export { LabelToLinkWrapper, CustomLink };
