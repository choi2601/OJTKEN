import styled, { css } from 'styled-components';

const ProductTableWrapper = styled.section<{ sort: string }>`
  ${({ sort }) => {
    return css`
      margin-top: ${sort === 'beer-list' ? '50px' : '100px'};
    `;
  }}
`;

const ProductList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const ProductItem = styled.li`
  width: 45%;
`;

export { ProductTableWrapper, ProductList, ProductItem };
