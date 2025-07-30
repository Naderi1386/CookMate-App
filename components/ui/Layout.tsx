import { ReactNode, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Header from "./Header";
import { Colors } from "@/constants/Colors";
import Menu from "./Menu";

const Layout = ({ children }: { children: ReactNode }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <SafeAreaView style={Styles.container}>
      <Header setIsShowMenu={setIsShowMenu} />
      <View style={Styles.mainWrraper}>{children}</View>
      <Menu isShow={isShowMenu} setIsShow={setIsShowMenu} />
    </SafeAreaView>
  );
};

export default Layout;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainWrraper: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flex: 1,
    backgroundColor: Colors.background,
    zIndex: -1,
  },
});
