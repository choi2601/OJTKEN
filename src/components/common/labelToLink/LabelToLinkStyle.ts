import styled, { css } from 'styled-components';

const LabelToLinkWrapper = styled.li<{ isActive: boolean }>`
  padding: 25px;
  border: none;
  font-size: 17px;
  transition: ease background-color 200ms;
  cursor: pointer;

  ${({ theme, isActive }) => {
    const { color } = theme;

    return css`
      color: ${color.white};
      background-color: ${isActive ? color.blue[700] : 'inherit'};

      &:hover {
        background-color: ${color.blue[500]};
      }
    `;
  }}
`;
const CustomLink = styled.a``;

export { LabelToLinkWrapper, CustomLink };
