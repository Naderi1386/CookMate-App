import { ReactNode } from "react";
import { SafeAreaView, View } from "react-native";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView>
      <Header />
      <View>{children}</View>
    </SafeAreaView>
  );
};

export default Layout;
