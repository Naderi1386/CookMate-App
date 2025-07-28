import { useStore } from "@/store/store";
import { FlatList, View } from "react-native";
import EmptyFavorites from "./EmptyFavorites";
import FavoriteItems from "./FavoriteItems";

const FavoritesList = () => {
  const { recipes } = useStore();
  if (!recipes.length) return <EmptyFavorites />;
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={recipes}
        renderItem={({ item: favorite }) => (
          <FavoriteItems favorite={favorite} />
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
};

export default FavoritesList;
