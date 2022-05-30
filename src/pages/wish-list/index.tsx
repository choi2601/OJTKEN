import ProductTable from '@components/common/productTable/ProductTable';
import AlertForm from '@components/common/alertForm/AlertForm';

import { useWishListStore } from '@states/wishListStore';

function WishList() {
  const { wishList } = useWishListStore();

  const checkCurrentWishListOfEmpty = () => {
    return wishList.length === 0;
  };

  return (
    <>
      {checkCurrentWishListOfEmpty() ? (
        <AlertForm />
      ) : (
        <>
          <ProductTable sort="wish-list" currentDataInfo={wishList} />
        </>
      )}
    </>
  );
}

export default WishList;
