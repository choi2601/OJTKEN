import type { BeerInfoType } from '@type/beerInfo';

interface DetailInfoProps {
  beerInfo: BeerInfoType;
}

function DetailInfo(props: DetailInfoProps) {
  const { beerInfo } = props;

  return <div>detailInfo</div>;
}

export default DetailInfo;
