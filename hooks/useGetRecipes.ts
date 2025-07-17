import { getRecipes } from "@/services/getRecipes";
import { useQuery } from "@tanstack/react-query";

export const useGetRecipes = (offset:string) => {
  const { data: recipes, isLoading: isGettingRecipes } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getRecipes("10", offset),
  });
  return { recipes, isGettingRecipes };
};
