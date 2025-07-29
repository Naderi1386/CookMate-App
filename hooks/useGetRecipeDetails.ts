import { getRecipeDetails } from "@/services/getRecipes";
import { useQuery } from "@tanstack/react-query";

export const useGetRecipeDetails = (id: string) => {
  const { isLoading: isGettingRecipeDetails, data: recipeDetails } = useQuery({
    queryKey: ["recipe-details", id],
    queryFn: () => getRecipeDetails(id),
  });
  return { isGettingRecipeDetails, recipeDetails };
};
