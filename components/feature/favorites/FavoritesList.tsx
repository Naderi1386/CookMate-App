import { useStore } from "@/store/store";
import { View } from "react-native";
import EmptyFavorites from "./EmptyFavorites";

const FavoritesList = () => {
  const { recipes } = useStore();
  if (!recipes.length) return <EmptyFavorites />;
  return <View></View>;
};

export default FavoritesList;
