import * as Style from './DetailInfoStyle';

import type { BeerInfoType } from '@type/beerInfo';

interface DetailInfoProps {
  beerInfo: BeerInfoType;
}

function DetailInfo(props: DetailInfoProps) {
  const { beerInfo } = props;

  return (
    <Style.DetailInfoWrapper>
      <Style.ProductFigure>
        <Style.ProductImage src={beerInfo.image_url} />
      </Style.ProductFigure>
      <Style.ProductInfo>
        <Style.ProductName sort="Roboto-Bold" size="40px">
          {beerInfo.name}
        </Style.ProductName>
        <Style.ProductABVInfo>
          <Style.ProductABVRatio>ABV {beerInfo.abv}</Style.ProductABVRatio>
          <Style.CustomSportsBarIcon abv={beerInfo.abv} />
        </Style.ProductABVInfo>
        <Style.ProductDate sort="Roboto-Light" size="18px" height={1.5}>
          Brewed {beerInfo.first_brewed}
        </Style.ProductDate>
        <Style.ProductDescriptionList>
          <Style.ProductDescription>
            <Style.ProductInfoTitle size="28px" height={2}>
              Description
            </Style.ProductInfoTitle>
            <Style.ProductInfoContent sort="Roboto-Light" size="17px" height={1.2}>
              {beerInfo.description}
            </Style.ProductInfoContent>
          </Style.ProductDescription>
          <Style.ProductDescription>
            <Style.ProductInfoTitle size="28px" height={2}>
              Tips
            </Style.ProductInfoTitle>
            <Style.ProductInfoContent sort="Roboto-Light" size="17px" height={1.2}>
              {beerInfo.brewers_tips}
            </Style.ProductInfoContent>
          </Style.ProductDescription>
        </Style.ProductDescriptionList>
      </Style.ProductInfo>
    </Style.DetailInfoWrapper>
  );
}

export default DetailInfo;
