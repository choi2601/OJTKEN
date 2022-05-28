import styled, { css } from 'styled-components';

const NavigationWrapper = styled.nav`
  ${({ theme }) => {
    const { color, layer } = theme;

    return css`
      position: fixed;
      left: 0;
      right: 0;
      width: 60vw;
      margin: 0 auto;
      z-index: ${layer.nav};
      background-color: ${color.blue[900]};
    `;
  }}
`;
const TabMenu = styled.ul`
  display: flex;
`;

export { NavigationWrapper, TabMenu };
