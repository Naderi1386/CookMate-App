import FavoritesList from "@/components/feature/favorites/FavoritesList";
import TotalFavorites from "@/components/feature/favorites/TotalFavorites";
import Layout from "@/components/ui/Layout";
import { FontSize } from "@/constants/FontSize";
import { StyleSheet, Text, View } from "react-native";

const Favorites = () => {
  return (
    <Layout>
      <View style={Styles.container}>
        <Text style={Styles.title}>My Favorites ♥️</Text>
        <FavoritesList />
        <TotalFavorites />
      </View>
    </Layout>
  );
};

export default Favorites;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 18,
  },
  title: {
    fontSize: FontSize["2xl"],
    fontWeight: "600",
    marginBottom: 16,
    fontStyle: "italic",
    textAlign: "center",
    lineHeight: 34,
  },
});
