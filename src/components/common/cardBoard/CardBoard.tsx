import * as Style from './CardBoardStyle';

import type { BeerInfoType } from '@type/beerInfo';

interface CardBoardProps {
  item: BeerInfoType;
}

function CardBoard(props: CardBoardProps) {
  const {
    item: { id, name, image_url, tagline, abv },
  } = props;

  return (
    <Style.CardBoardWrapper>
      <Style.AddWishButton>
        <Style.CustomShoppingCartIcon />
      </Style.AddWishButton>
      <Style.ProductFigure>
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
  );
}

export default CardBoard;
