import { Colors } from "@/constants/Colors";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const Loading = () => {
  return (
    <View style={Styles.container}>
      <ActivityIndicator size="large" color={Colors.main} />
    </View>
  );
};

export default Loading;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
