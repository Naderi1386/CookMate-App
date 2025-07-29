import { ReactNode } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Header from "./Header";
import { Colors } from "@/constants/Colors";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView style={Styles.container}>
      <Header />
      <View style={Styles.mainWrraper}>{children}</View>
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
    zIndex:-1
  },
});
