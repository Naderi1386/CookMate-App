import CustomButton from "@/components/ui/CustomButton";
import Layout from "@/components/ui/Layout";
import { FontSize } from "@/constants/FontSize";
import { ScreenPropsType } from "@/types/Screens";
import { Image, StyleSheet, Text, View } from "react-native";

const Welcome = ({ navigation }: ScreenPropsType<"Welcome">) => {
  return (
    <Layout>
      <View style={Styles.container}>
        <Image
          style={Styles.logo}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSCezZAKy4aJLPVlLu1KoyAcbnU_KNUjxIew&s",
          }}
        />
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
        <View>
          <CustomButton onPress={() => navigation.navigate("Home")}>
            start
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
  logo: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    borderRadius:10000
  },
  title: {
    fontWeight: "600",
    fontSize: FontSize["2xl"],
    marginBottom: 16,
  },
  text: {
    fontWeight: "500",
    fontSize: FontSize.md,
    marginBottom: 10,
    textAlign: "center",
  },
});
