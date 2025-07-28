import CustomButton from "@/components/ui/CustomButton";
import { Colors } from "@/constants/Colors";
import { FontSize } from "@/constants/FontSize";
import { useStore } from "@/store/store";
import { RecipesType } from "@/types/Recipes";
import { Card, Icon } from "@rneui/themed";
import { StyleSheet, View } from "react-native";

const FavoriteItems = ({ favorite }: { favorite: RecipesType }) => {
  const { removeRecipe } = useStore();
  const { image, title, id } = favorite;
  return (
    <View>
      <View style={Styles.iconWrraper}>
        <Icon
          onPress={() => removeRecipe(id)}
          name="delete-outline"
          type="material-community"
          color={Colors.main}
        />
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

export default FavoriteItems;

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
    paddingLeft: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
