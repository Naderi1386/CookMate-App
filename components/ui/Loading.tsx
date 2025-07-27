import { ActivityIndicator, StyleSheet, View } from "react-native";

const Loading = ({
  color,
  size,
}: {
  color: string;
  size: number | "large" | "small" | undefined;
}) => {
  return (
    <View style={Styles.container}>
      <ActivityIndicator size={size} color={color} />
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
