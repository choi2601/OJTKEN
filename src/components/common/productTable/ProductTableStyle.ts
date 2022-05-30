import styled from 'styled-components';

const ProductTableWrapper = styled.section`
  margin-top: 50px;
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
