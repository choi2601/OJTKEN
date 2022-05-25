import styled from 'styled-components';

const LayoutWrapper = styled.section`
  position: relative;
  max-width: 60vw;
  margin: 0 auto;
  font-family: 'Roboto-Regular';
  height: 500px;
  /* background-color: red; */
`;
const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: 4vh;
  /* background-color: orange; */
`;

export { LayoutWrapper, Footer };
