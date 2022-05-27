import * as Style from './ProductTableStyle';

import CardBoard from '../cardBoard';

import type { BeerInfoType } from '@type/beerInfo';

interface ProductTableProps {
  currentDataInfo: BeerInfoType[];
}

function ProductTable(props: ProductTableProps) {
  const { currentDataInfo } = props;

  return (
    <Style.ProductTableWrapper>
      <Style.ProductList>
        {currentDataInfo?.map((beerInfo: BeerInfoType) => {
          return (
            <Style.ProductItem key={`${beerInfo.id}-${beerInfo.name}`}>
              <CardBoard beerInfo={beerInfo} />
            </Style.ProductItem>
          );
        })}
      </Style.ProductList>
    </Style.ProductTableWrapper>
  );
}

export default ProductTable;
