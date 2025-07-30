import { Colors } from "@/constants/Colors";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@/types/Navigation";
import { FontSize } from "@/constants/FontSize";
import Logo from "./Logo";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Dispatch, SetStateAction } from "react";

const Header = ({
  setIsShowMenu,
}: {
  setIsShowMenu: Dispatch<SetStateAction<boolean>>;
}) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={Styles.container}>
      <Icon
        onPress={() => setIsShowMenu(true)}
        name="menu"
        size={30}
        color={Colors.sub}
      />
      <Text style={Styles.title}>Cook Mate 👩‍🍳</Text>
      <Pressable onPress={() => navigation.navigate("Welcome")}>
        <Logo width={40} height={40} />
      </Pressable>
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
  title: {
    fontSize: FontSize.lg,
    fontWeight: "bold",
  },
});
