import dynamic from 'next/dynamic';
import * as Style from './CardBoardStyle';

const Modal = dynamic(() => import('@components/common/modal'), { ssr: false });

import useModal from '@hooks/useModal';

import { useWishListStore } from '@states/wishListStore';

import type { BeerInfoType } from '@type/beerInfo';

interface CardBoardProps {
  beerInfo: BeerInfoType;
}

function CardBoard(props: CardBoardProps) {
  const {
    beerInfo: { id, name, image_url, tagline, abv },
  } = props;
  const { wishList, addBeerInfo, removeBeerInfo } = useWishListStore();
  const { isShowing, handleModalVisible } = useModal();

  const checkBeerInfoInWishList = () => {
    const isExisted = wishList.find((beerInfo) => beerInfo.id === id);

    return isExisted;
  };

  return (
    <>
      <Modal isShowing={isShowing} hide={handleModalVisible}>
        <div>test</div>
      </Modal>
      <Style.CardBoardWrapper>
        <Style.StatusBar>
          {checkBeerInfoInWishList() ? (
            <>
              <Style.HandleWishListButton>
                <Style.CustomDeleteIcon onClick={() => removeBeerInfo(id)} />
              </Style.HandleWishListButton>
              <Style.CustomCheckCircleIcon />
            </>
          ) : (
            <Style.HandleWishListButton>
              <Style.CustomShoppingCartIcon onClick={() => addBeerInfo(props.beerInfo)} />
            </Style.HandleWishListButton>
          )}
        </Style.StatusBar>
        <Style.ProductFigure onClick={handleModalVisible}>
          <Style.ProductImage src={image_url} />
        </Style.ProductFigure>
        <Style.ProductMainInfo>
          <Style.ProductName sort="Roboto-Bold" size="18px" weight={700} height={1.6}>
            {name}
          </Style.ProductName>
          <Style.ProdcutTagline height={1.9}>{tagline}</Style.ProdcutTagline>
          <Style.ProductABVInfo>
            <Style.ProductABVRatio sort="Roboto-Light" height={1.4}>
              {`ABV ${abv}`}
            </Style.ProductABVRatio>
            <Style.CustomSportsBarIcon abv={abv} />
          </Style.ProductABVInfo>
        </Style.ProductMainInfo>
      </Style.CardBoardWrapper>
    </>
  );
}

export default CardBoard;
