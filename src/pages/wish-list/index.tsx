import styled from 'styled-components';

import ProductTable from '@components/common/productTable/ProductTable';
import Pagination from '@components/common/pagination/Pagination';

import { useWishListStore } from '@states/wishListStore';

function WishList() {
  const { wishList } = useWishListStore();

  return (
    <WishListWrapper>
      <ProductTable currentDataInfo={wishList} />
      <Pagination />
    </WishListWrapper>
  );
}

export default WishList;

const WishListWrapper = styled.section`
  position: relative;
  padding: 10px 80px;
`;
