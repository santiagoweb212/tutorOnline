import { create } from "zustand";
import zukeeper from "zukeeper";

const useCategoriesStore = create(
  zukeeper((set) => ({
    categories: [],
    setCategories: (newCategories) => set({ categories: [...newCategories] }),
  }))
);

export default useCategoriesStore;