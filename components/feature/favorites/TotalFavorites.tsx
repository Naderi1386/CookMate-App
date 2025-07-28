import { Colors } from "@/constants/Colors";
import { FontSize } from "@/constants/FontSize";
import { useStore } from "@/store/store";
import { StyleSheet, Text, View } from "react-native";

const TotalFavorites = () => {
  const {
    recipes: { length },
  } = useStore();
  return (
    <View style={Styles.container}>
      <Text style={Styles.content}>
        {length ? `Total Favorites ♥️ : ${length}` : `You Have No Favorites 🙁`}
      </Text>
    </View>
  );
};

export default TotalFavorites;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.sub,
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 14,
  },
  content: {
    textAlign: "center",
    color: Colors.main,
    fontSize: FontSize.lg,
    fontWeight: "bold",
  },
});
