import styled, { css } from 'styled-components';

const Style = {
  NavigationWrapper: styled.section`
    ${({ theme }) => {
      const { color } = theme;

      return css`
        background-color: ${color.blue[900]};
      `;
    }}
  `,
  TabMenu: styled.ul`
    display: flex;
  `,
};

export default Style;
