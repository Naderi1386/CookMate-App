import RecipesList from "@/components/feature/home/RecipesList";
import Layout from "@/components/ui/Layout";
import { FontSize } from "@/constants/FontSize";
import { StyleSheet, View, Text } from "react-native";

const Home = () => {
  return (
    <Layout>
      <View style={Styles.container}>
        <Text style={Styles.title}>
          🍽️ Discover Tasty Recipes Made Just for You!
        </Text>
        <RecipesList />
      </View>
    </Layout>
  );
};

export default Home;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 18,
  },
  title: {
    fontSize: FontSize.xl,
    fontWeight: "600",
    marginBottom: 10,
    fontStyle: "italic",
    textAlign: "center",
  },
});
