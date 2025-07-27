import { RecipesType } from "@/types/Recipes";
import { create } from "zustand";

type StoreType = {
  recipes: RecipesType[];
  addRecipe: (recipe: RecipesType) => void;
  removeRecipe: (id: number) => void;
};

export const useStore = create<StoreType>()((set) => ({
  recipes: [],
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
  removeRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));
