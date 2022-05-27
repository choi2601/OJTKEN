import styled from 'styled-components';

import CardBoard from '@components/common/cardBoard/CardBoard';
import Pagination from '@components/common/pagination/Pagination';

import { useWishListStore } from '@states/wishListStore';

import { BeerInfoType } from '@type/beerInfo';

function WishList() {
  const { wishList } = useWishListStore();

  return (
    <WishListWrapper>
      <ProductList>
        {wishList.map((beerInfo: BeerInfoType) => {
          return (
            <ProductItem key={`${beerInfo.id}-${beerInfo.name}`}>
              <CardBoard beerInfo={beerInfo} />
            </ProductItem>
          );
        })}
      </ProductList>
      <Pagination />
    </WishListWrapper>
  );
}

export default WishList;

const WishListWrapper = styled.section`
  position: relative;
  padding: 10px 80px;
`;

const ProductList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  margin-top: 120px;
`;

const ProductItem = styled.li`
  width: 45%;
`;
