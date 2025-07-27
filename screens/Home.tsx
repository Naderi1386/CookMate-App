import Pagination from "@/components/common/recipes/Pagination";
import RecipesList from "@/components/feature/home/RecipesList";
import Layout from "@/components/ui/Layout";
import { FontSize } from "@/constants/FontSize";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

const Home = () => {
  const [offset, setOffset] = useState("0");
  return (
    <Layout>
      <View style={Styles.container}>
        <Text style={Styles.title}>
          🍽️ Discover Tasty Recipes Made Just for You!
        </Text>
        <RecipesList offset={offset} key={offset} />
        <Pagination
          onLeftPress={() => {
            if (offset !== "0") setOffset((val) => String(Number(val) - 10));
          }}
          onRightPress={() => setOffset((val) => String(Number(val) + 10))}
          value={String(Number(offset) / 10 + 1)}
        />
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
    fontSize: FontSize["2xl"],
    fontWeight: "600",
    marginBottom: 10,
    fontStyle: "italic",
    textAlign: "center",
    lineHeight: 34,
  },
});
