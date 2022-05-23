import create from 'zustand';

import type { BeerInfoType } from 'types/beerInfo';

interface WishListState {
  beerInfoList: BeerInfoType[];
  addBeerInfo: (beerInfo: BeerInfoType) => void;
  removeBeerInfo: (id: number) => void;
}

const useWishListStore = create<WishListState>((set) => ({
  beerInfoList: [],
  addBeerInfo: (beerInfo: BeerInfoType) => {
    set((state) => ({
      beerInfoList: [...state.beerInfoList, beerInfo],
    }));
  },
  removeBeerInfo: (id) => {
    set((state) => ({
      beerInfoList: state.beerInfoList.filter((beerInfo) => beerInfo.id !== id),
    }));
  },
}));

export { useWishListStore };
