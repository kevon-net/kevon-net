import { create } from 'zustand';
import type { CategoryRelations } from '@repo/types/models/category';

export type CategoriesValue = CategoryRelations[] | null | undefined;

interface CategoryState {
  categories: CategoriesValue;
  deleted: CategoryRelations[];
  setCategories: (data: CategoriesValue) => void;
  clearCategories: () => void;
  addCategory: (data: CategoryRelations) => void;
  updateCategory: (data: CategoryRelations) => void;
  deleteCategory: (data: CategoryRelations) => void;
}

export const useStoreCategory = create<CategoryState>((set) => ({
  categories: undefined,
  deleted: [],

  setCategories: (data) => {
    set({ categories: data });
  },

  clearCategories: () => {
    set({ categories: [] });
  },

  addCategory: (data) => {
    set((state) => ({
      categories: [...(state.categories ?? []), data],
    }));
  },

  updateCategory: (data) => {
    set((state) => ({
      categories:
        state.categories?.map((i) => (i.id === data.id ? { ...data } : i)) ??
        undefined,
    }));
  },

  deleteCategory: (data) => {
    set((state) => ({
      deleted: [...state.deleted, data],
      categories:
        state.categories?.filter((i) => i.id !== data.id) ?? undefined,
    }));
  },
}));
