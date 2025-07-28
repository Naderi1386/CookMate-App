import { FontSize } from "@/constants/FontSize";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
const RecipeDetails = () => {
  return (
    <View>
      <View>
        <Image
          style={Styles.img}
          source={{
            uri: "https://img.spoonacular.com/recipes/716429-556x370.jpg",
          }}
        />
      </View>
      <Text style={Styles.title}>
        Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
      </Text>
      <View style={Styles.smallDetailsWrraper}>
        <View style={Styles.smallDetails}>
          <Ionicons name="time-outline" size={38} color={Colors.main} />
          <Text>Ready In 45 mins</Text>
        </View>
        <View style={Styles.smallDetails}>
          <Ionicons name="barbell-outline" size={38} color={Colors.main} />
          <Text>Difficulty : Easy</Text>
        </View>
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
    gap:42
  },
  smallDetails: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    alignItems: "center",
  },
});
