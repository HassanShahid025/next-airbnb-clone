import { create } from "zustand";

type RentModalState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const useRentModal = create<RentModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useRentModal;
