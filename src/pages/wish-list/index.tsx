import styled from 'styled-components';

import Pagination from '@components/common/pagination/Pagination';

function WishList() {
  return (
    <WishListWrapper>
      <div>wishList</div>
      <Pagination />
    </WishListWrapper>
  );
}

export default WishList;

const WishListWrapper = styled.section``;
