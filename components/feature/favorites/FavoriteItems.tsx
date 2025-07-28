import CustomButton from "@/components/ui/CustomButton";
import { Colors } from "@/constants/Colors";
import { FontSize } from "@/constants/FontSize";
import { RecipesType } from "@/types/Recipes";
import { Card } from "@rneui/themed";
import { StyleSheet } from "react-native";

const FavoriteItems = ({ favorite }: { favorite: RecipesType }) => {
  const { image, title } = favorite;
  return (
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
  icon: {
    marginTop: 8,
  },
});
