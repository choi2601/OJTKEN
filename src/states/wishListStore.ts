import create from 'zustand';

import type { BeerInfoType } from '@type/beerInfo';

interface WishListState {
  wishList: BeerInfoType[];
  addBeerInfo: (beerInfo: BeerInfoType) => void;
  removeBeerInfo: (id: number) => void;
}

const useWishListStore = create<WishListState>((set) => ({
  wishList: [],
  addBeerInfo: (beerInfo: BeerInfoType) => {
    set((state) => ({
      wishList: [...state.wishList, beerInfo],
    }));
  },
  removeBeerInfo: (id) => {
    set((state) => ({
      wishList: state.wishList.filter((beerInfo) => beerInfo.id !== id),
    }));
  },
}));

export { useWishListStore };
