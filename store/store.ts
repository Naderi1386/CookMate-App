import { RecipesType } from "@/types/Recipes";
import { create } from "zustand";
// import { persist } from "zustand/middleware";
// import AsyncStorage from "@react-native-async-storage/async-storage";

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

/*
  export const useStore = create<StoreType>()(
    persist(
      (set) => ({
        recipes: [],
        addRecipe: (recipe) =>
          set((state) => ({ recipes: [...state.recipes, recipe] })),
        removeRecipe: (id) =>
          set((state) => ({
            recipes: state.recipes.filter((recipe) => recipe.id !== id),
          })),
      }),
      {
        name: "recipes-favorites-storage",
        storage: {
          getItem: async (name) => {
            const item = await AsyncStorage.getItem(name);
            return item ? JSON.parse(item) : null;
          },
          setItem: async (name, value) => {
            await AsyncStorage.setItem(name, JSON.stringify(value));
          },
          removeItem: async (name) => {
            await AsyncStorage.removeItem(name);
          },
        },
      }
    )
  );
*/
