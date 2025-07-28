import CustomButton from "@/components/ui/CustomButton";
import { Colors } from "@/constants/Colors";
import { FontSize } from "@/constants/FontSize";
import { useStore } from "@/store/store";
import { RecipesType } from "@/types/Recipes";
import { Card, Icon } from "@rneui/themed";
import { Alert, StyleSheet, View } from "react-native";

const RecipeCart = ({ recipe }: { recipe: RecipesType }) => {
  const { addRecipe, recipes, removeRecipe } = useStore();
  const { image, title, id } = recipe;
  const isAdded = recipes.find((recipe) => recipe.id === id);
  return (
    <View>
      <View style={Styles.iconWrraper}>
        {isAdded ? (
          <Icon
            name="heart"
            type="font-awesome"
            color="red"
            onPress={() => {
              removeRecipe(id);
              Alert.alert(
                "Removed from Favorites",
                "This recipe has been removed from your favorites."
              );
            }}
          />
        ) : (
          <Icon
            onPress={() => {
              addRecipe(recipe);
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
      <Card containerStyle={Styles.container}>
        <Card.Title style={Styles.title}>{title}</Card.Title>
        <Card.Divider style={Styles.divider} />
        <Card.Image
          style={Styles.img}
          source={{
            uri: image,
          }}
        />

        <CustomButton>View More</CustomButton>
      </Card>
    </View>
  );
};

export default RecipeCart;

const Styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.sub,
    marginBottom: 20,
  },
  title: {
    fontWeight: "600",
    fontSize: FontSize.lg,
  },
  img: {
    padding: 0,
    marginBottom: 12,
    resizeMode: "cover",
  },
  divider: {
    backgroundColor: Colors.sub,
  },

  iconWrraper: {
    paddingLeft: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
