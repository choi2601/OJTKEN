import styled, { css } from 'styled-components';

const LayoutWrapper = styled.section`
  position: relative;
  max-width: 60vw;
  height: 500px;
  margin: 0 auto;
  font-family: 'Roboto-Regular';
`;

const Inner = styled.div`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      position: relative;
      padding: 10px 80px;
      background-color: ${color.white};
    `;
  }}
`;

const Footer = styled.footer`
  padding-bottom: 4vh;
`;

export { LayoutWrapper, Inner, Footer };
