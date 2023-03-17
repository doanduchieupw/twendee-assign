import { create } from 'zustand';

interface PaginationState {
  pageNumber: number;
  itemOnPage: number;
  nextPage: () => void;
  previousPage: () => void;
  changePage: (number: number) => void;
  setItemOnPage: (number: number) => void;
}

const usePagination = create<PaginationState>((set) => ({
  pageNumber: 1,
  itemOnPage: 10,
  nextPage: () => set((state) => ({ pageNumber: state.pageNumber + 1 })),
  previousPage: () => set((state) => ({ pageNumber: state.pageNumber - 1 })),
  changePage: (number) => set(() => ({ pageNumber: number })),
  setItemOnPage: (number) => set(() => ({ itemOnPage: number })),
}));
export default usePagination;
