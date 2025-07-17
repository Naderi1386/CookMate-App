import { Colors } from "@/constants/Colors";
import { FontSize } from "@/constants/FontSize";
import { Button } from "@rneui/themed";
import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

const CustomButton = ({
  children,
  onPress,
}: {
  children: ReactNode;
  onPress?: () => void;
}) => {
  return (
    <Button onPress={onPress} buttonStyle={Styles.button}>
      <Text style={Styles.text}>{children}</Text>
    </Button>
  );
};

export default CustomButton;

const Styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.main,
    borderRadius: 8,
    paddingBottom: 14,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: Colors.sub,
  },
  text: {
    color: Colors.white,
    fontSize: FontSize.lg,
    fontWeight: "600",
  },
});
