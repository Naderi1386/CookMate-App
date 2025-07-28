import { useStore } from "@/store/store";
import { FlatList, View } from "react-native";
import EmptyFavorites from "./EmptyFavorites";
import FavoriteItems from "./FavoriteItems";
import Separator from "@/components/common/recipes/Separator";

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
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

export default FavoritesList;
