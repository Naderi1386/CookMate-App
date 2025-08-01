import { RecipeDetailsType, RecipesType } from "@/types/Recipes";
import axios from "axios";
const MAIN_URL = "https://api.spoonacular.com/recipes";
const API_KEY = "15bfdeea1a46489c84bf5f0f9f81ab2b";
export const getRecipes = async (
  number: string,
  offset: string,
  query?: string
) => {
  try {
    const response = await axios.get(`${MAIN_URL}/complexSearch`, {
      params: {
        apiKey: API_KEY,
        offset,
        number,
        query,
      },
    });
    return response.data.results as RecipesType[];
  } catch (error) {
    console.log(error);
    throw new Error("Recipes could not be loaded !");
  }
};

export const getRecipeDetails = async (id: string) => {
  try {
    const response = await axios.get(`${MAIN_URL}/${id}/information`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data as RecipeDetailsType;
  } catch (error) {
    console.log(error);
    throw new Error("Recipes could not be loaded !");
  }
};
