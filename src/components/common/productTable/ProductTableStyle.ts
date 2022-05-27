import styled from 'styled-components';

const ProductTableWrapper = styled.section``;

const ProductList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  margin-top: 120px;
`;

const ProductItem = styled.li`
  width: 45%;
`;

export { ProductTableWrapper, ProductList, ProductItem };
