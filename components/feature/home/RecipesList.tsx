import RecipeCart from "@/components/common/recipes/RecipeCart";
import { useGetRecipes } from "@/hooks/useGetRecipes";
import { FlatList } from "react-native";
const RecipesList = () => {
  const { data } = useGetRecipes();

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <RecipeCart recipe={item} />}
      keyExtractor={(item) => String(item.id)}
    />
  );
};

export default RecipesList;
