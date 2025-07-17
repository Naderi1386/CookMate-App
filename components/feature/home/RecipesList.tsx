import RecipeCart from "@/components/common/recipes/RecipeCart";
import Loading from "@/components/ui/Loading";
import { useGetRecipes } from "@/hooks/useGetRecipes";
import { FlatList } from "react-native";
const RecipesList = ({ offset }: { offset: string }) => {
  const { recipes, isGettingRecipes } = useGetRecipes(offset);
  if (isGettingRecipes) return <Loading />;
  return (
    <FlatList
      data={recipes}
      renderItem={({ item }) => <RecipeCart recipe={item} />}
      keyExtractor={(item) => String(item.id)}
    />
  );
};

export default RecipesList;
