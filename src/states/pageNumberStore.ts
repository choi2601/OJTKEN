import create from 'zustand';

interface PageNumberState {
  page: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (newPage: number) => void;
  resetPage: () => void;
}

const usePageNumberStore = create<PageNumberState>((set) => ({
  page: 1,
  nextPage: () => {
    set((state) => ({
      page: state.page + 1,
    }));
  },
  prevPage: () => {
    set((state) => ({
      page: state.page - 1,
    }));
  },
  setPage: (newPage) => {
    set(() => ({
      page: newPage,
    }));
  },
  resetPage: () => {
    set(() => ({
      page: 1,
    }));
  },
}));

export { usePageNumberStore };
