import { create } from 'zustand';

interface PaginationState {
  pageNumber: number;
  itemOnPage: number;
  maxPage: number;
  pagination: number[];
  nextPage: () => void;
  previousPage: () => void;
  changePage: (number: number) => void;
  setItemOnPage: (number: number) => void;
  setPagination: (number: number) => void;
}

const usePagination = create<PaginationState>((set) => ({
  pageNumber: 1,
  itemOnPage: 10,
  pagination: [1, 2, 3],
  maxPage: 10,
  nextPage: () => set((state) => ({ pageNumber: state.pageNumber + 1 })),
  previousPage: () => set((state) => ({ pageNumber: state.pageNumber - 1 })),
  changePage: (number) => set(() => ({ pageNumber: number })),
  setPagination: (number) =>
    set((state) => {
      if (number === 1) return { pagination: [1, 2, 3] };
      if (number === state.maxPage) return { pagination: [state.maxPage - 2, state.maxPage - 1, state.maxPage] };
      return { pagination: [number - 1, number, number + 1] };
    }),
  setItemOnPage: (number) => set(() => ({ itemOnPage: number })),
}));
export default usePagination;
