import { Colors } from "@/constants/Colors";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@/types/Navigation";
import { FontSize } from "@/constants/FontSize";

const Header = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={Styles.container}>
      <Pressable onPress={() => navigation.navigate("Welcome")}>
        <Image
          style={Styles.logo}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSCezZAKy4aJLPVlLu1KoyAcbnU_KNUjxIew&s",
          }}
        />
      </Pressable>
      <Text style={Styles.title}>Cook Mate 👩‍🍳</Text>
    </View>
  );
};

export default Header;

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.main,
  },
  logo: {
    resizeMode: "contain",
    width: 45,
    height: 45,
    borderRadius: 9999,
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: "bold",
  },
});
