import { create } from "zustand";

type SearchModalState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const useSearchModal = create<SearchModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useSearchModal;
