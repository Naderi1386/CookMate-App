import { Colors } from "@/constants/Colors";
import { FontSize } from "@/constants/FontSize";
import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

const HeaderList = ({ children }: { children: ReactNode }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{children}</Text>
    </View>
  );
};

export default HeaderList;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.sub,
    paddingVertical: 10,
    marginBottom:6
  },
  title: {
    color: Colors.main,
    fontSize: FontSize.xl,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
  },
});
