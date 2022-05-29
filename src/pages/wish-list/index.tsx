import styled, { css } from 'styled-components';

import ProductTable from '@components/common/productTable/ProductTable';
import Pagination from '@components/common/pagination/Pagination';
import AlertForm from '@components/common/alertForm/AlertForm';

import { useWishListStore } from '@states/wishListStore';

function WishList() {
  const { wishList } = useWishListStore();

  const checkCurrentWishListOfEmpty = () => {
    return wishList.length === 0;
  };

  return (
    <WishListWrapper>
      {checkCurrentWishListOfEmpty() ? (
        <AlertForm />
      ) : (
        <>
          <ProductTable currentDataInfo={wishList} />
          <Pagination />
        </>
      )}
    </WishListWrapper>
  );
}

export default WishList;

const WishListWrapper = styled.section`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      position: relative;
      padding: 10px 80px;
      background-color: ${color.white};
    `;
  }}
`;
