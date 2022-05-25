import styled, { css } from 'styled-components';

const NavigationWrapper = styled.section`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      background-color: ${color.blue[900]};
    `;
  }}
`;
const TabMenu = styled.ul`
  display: flex;
`;

export { NavigationWrapper, TabMenu };
