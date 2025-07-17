import { getRecipes } from "@/services/getRecipes";
import { useQuery } from "@tanstack/react-query";

export const useGetRecipes = () => {
  const { data:recipes,isLoading:isGettingRecipes } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getRecipes("10"),
  });
  return { recipes,isGettingRecipes };
};
