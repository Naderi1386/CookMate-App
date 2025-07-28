export type RecipesType = {
  id: number;
  image: string;
  imageType: string;
  title: string;
};

export type RecipeDetailsType = {
  id: number;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  healthScore: number;
  spoonacularScore: number;
  extendedIngredients: {
    id: number;
    name: string;
    original: string;
    image: string;
  }[];
  analyzedInstructions: {
    steps: {
      number: number;
      step: string;
    }[];
  }[];
  summary: string;
  sourceUrl?: string;
};
