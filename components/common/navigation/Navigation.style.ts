import styled from 'styled-components';

const NavigationWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.blue[900]};
`;

const TabMenu = styled.ul`
  display: flex;
`;

export { NavigationWrapper, TabMenu };
