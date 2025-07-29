import { Colors } from "@/constants/Colors";
import { Dispatch, SetStateAction } from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "./Logo";
import { FontSize } from "@/constants/FontSize";

const Menu = ({
  isShow,
  setIsShow,
}: {
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
}) => {
  if (!isShow) return null;
  return (
    <View style={Styles.container}>
      <View style={Styles.logoWrraper}>
        <Logo height={55} width={55} />
      </View>
      <View style={Styles.mainWrraper}>
        <Text style={Styles.title}>Cook Mate 👩‍🍳</Text>
      </View>
    </View>
  );
};

export default Menu;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "fixed",
    zIndex: 10000,
    left: 0,
    bottom: 0,
    top: 0,
    width: 240,

    paddingVertical: 6,
    backgroundColor: Colors.white,
    borderRightWidth: 4,
    borderColor: Colors.sub,
  },
  logoWrraper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderBottomWidth: 4,
    borderColor: Colors.main,
    paddingHorizontal: 10,
  },
  mainWrraper: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 8,
    paddingBottom: 14,
  },
});
