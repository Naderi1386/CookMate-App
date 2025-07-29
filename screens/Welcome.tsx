import CustomButton from "@/components/ui/CustomButton";
import Layout from "@/components/ui/Layout";
import Logo from "@/components/ui/Logo";
import { FontSize } from "@/constants/FontSize";
import { ScreenPropsType } from "@/types/Screens";
import { StyleSheet, Text, View } from "react-native";

const Welcome = ({ navigation }: ScreenPropsType<"Welcome">) => {
  return (
    <Layout>
      <View style={Styles.container}>
        <Logo width={90} height={90} />
        <Text style={Styles.title}>🍽️ Welcome to Cook Mate!</Text>
        <Text style={Styles.text}>
          🥘 Thousands of delicious recipes from around the world — ready to
          turn you into a home chef! 👨‍🍳 With just a few taps, start cooking your
          favorite meals — easy, fast, and step-by-step.
        </Text>
        <Text style={Styles.text}>
          🔎 Discover, learn, and get inspired... ❤️ Save your favorite dishes
          and come back anytime!
        </Text>
        <Text style={Styles.text}>
          🍳 Ready to cook your first recipe? 👉 Tap “Get Started” and dive into
          the world of flavors!
        </Text>
        <View style={Styles.buttonsContainer}>
          <CustomButton onPress={() => navigation.navigate("Home")}>
            Start 🤩
          </CustomButton>
          <CustomButton onPress={() => navigation.navigate("Favorites")}>
            Favorites ♥️
          </CustomButton>
        </View>
      </View>
    </Layout>
  );
};

export default Welcome;

const Styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
    paddingVertical: 10,
  },
  title: {
    fontWeight: "700",
    fontSize: FontSize["2xl"],
    marginBottom: 16,
  },
  text: {
    fontWeight: "600",
    fontSize: FontSize.md,
    marginBottom: 10,
    textAlign: "center",
  },
  buttonsContainer: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    flexDirection: "row",
  },
});
