import { FontSize } from "@/constants/FontSize";
import { Alert, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import Separator from "@/components/common/recipes/Separator";
import { useGetRecipeDetails } from "@/hooks/useGetRecipeDetails";
import Loading from "@/components/ui/Loading";
import { getDifficulty, getStepsCount } from "@/utils/utils";
import HeaderList from "./HeaderList";
import { Icon } from "@rneui/themed";
import { useStore } from "@/store/store";
const RecipeDetails = ({ id }: { id: string }) => {
  const { isGettingRecipeDetails, recipeDetails } = useGetRecipeDetails(id);
  const { addRecipe, recipes, removeRecipe } = useStore();
  if (isGettingRecipeDetails)
    return (
      <View style={Styles.loadingWrraper}>
        <Loading color={Colors.main} size={45} />
      </View>
    );
  const {
    image,
    title,
    readyInMinutes,
    extendedIngredients,
    analyzedInstructions,
  } = recipeDetails!;
  const difficulty = getDifficulty(
    readyInMinutes,
    getStepsCount(recipeDetails!)
  );
  const isAdded = recipes.find((recipe) => String(recipe.id) === id);

  return (
    <View>
      <View>
        <View>
          <Image
            style={Styles.img}
            source={{
              uri: image,
            }}
          />
        </View>
        <Text style={Styles.title}>{title}</Text>
        <View style={Styles.smallDetailsWrraper}>
          <View style={Styles.smallDetails}>
            <Ionicons name="time-outline" size={38} color={Colors.main} />
            <Text>Ready In {readyInMinutes} mins</Text>
          </View>
          <View style={Styles.smallDetails}>
            <Ionicons name="barbell-outline" size={38} color={Colors.main} />
            <Text>Difficulty : {difficulty}</Text>
          </View>
        </View>
      </View>
      <View style={Styles.heartIconWrraper}>
        {isAdded ? (
          <Icon
            name="heart"
            type="font-awesome"
            color="red"
            onPress={() => {
              removeRecipe(Number(id));
              Alert.alert(
                "Removed from Favorites",
                "This recipe has been removed from your favorites."
              );
            }}
          />
        ) : (
          <Icon
            onPress={() => {
              addRecipe({ id: Number(id), image, imageType: "jpg", title });
              Alert.alert(
                "Added to Favorites",
                "This recipe has been added to your favorites."
              );
            }}
            name="heart-o"
            type="font-awesome"
            color={Colors.main}
          />
        )}
      </View>
      <View style={Styles.listContainer}>
        <FlatList
          data={extendedIngredients}
          renderItem={({ item, index }) => (
            <Text style={Styles.listItem}>
              {index + 1} : {item.name}( {item.original} )
            </Text>
          )}
          ItemSeparatorComponent={Separator}
          keyExtractor={(item) => String(item.id)}
          ListHeaderComponent={<HeaderList>Ingredients 📝</HeaderList>}
        />
      </View>
      <View style={Styles.listContainer}>
        <FlatList
          data={analyzedInstructions[0].steps}
          renderItem={({ item }) => (
            <Text style={Styles.listItem}>
              {item.number} : {item.step}
            </Text>
          )}
          ItemSeparatorComponent={Separator}
          keyExtractor={(item) => String(item.number)}
          ListHeaderComponent={<HeaderList>Instructions 🔥</HeaderList>}
        />
      </View>
    </View>
  );
};

export default RecipeDetails;

const Styles = StyleSheet.create({
  img: {
    width: 400,
    height: 185,
    resizeMode: "cover",
    borderRadius: 8,
  },
  title: {
    marginTop: 10,
    fontSize: FontSize.lg,
    fontWeight: "bold",
    textAlign: "center",
  },
  smallDetailsWrraper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 24,
    gap: 42,
  },
  smallDetails: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    alignItems: "center",
  },
  listContainer: {
    marginVertical: 20,
  },
  listItem: {
    fontSize: FontSize.md,
    fontWeight: "600",
    marginVertical: 6,
  },
  heartIconWrraper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 28,
  },
  loadingWrraper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
