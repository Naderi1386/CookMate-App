import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { FontSize } from "@/constants/FontSize";

const Pagination = ({
  value,
  onLeftPress,
  onRightPress,
}: {
  value: string;
  onRightPress: () => void;
  onLeftPress: () => void;
}) => {
  return (
    <View style={Styles.container}>
      <Feather
        onPress={onLeftPress}
        name="chevron-left"
        size={34}
        color={Colors.main}
      />
      <Text style={Styles.value}>{value}</Text>
      <Feather
        onPress={onRightPress}
        name="chevron-right"
        size={34}
        color={Colors.main}
      />
    </View>
  );
};

export default Pagination;

const Styles = StyleSheet.create({
  container: {
    marginTop: 14,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  value: {
    fontSize: FontSize["2xl"],
    fontWeight: "bold",
    color: Colors.black,
  },
});
