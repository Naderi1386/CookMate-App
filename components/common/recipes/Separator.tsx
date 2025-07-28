import { Colors } from "@/constants/Colors";
import { StyleSheet, View } from "react-native";

const Separator = () => {
  return <View style={Styles.separator}></View>;
};

export default Separator;

const Styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 2,
    borderColor: Colors.black,
    marginVertical:26,
    opacity:0.25
  },
});
