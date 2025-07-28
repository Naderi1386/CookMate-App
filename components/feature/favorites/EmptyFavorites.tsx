import CustomButton from "@/components/ui/CustomButton";
import { FontSize } from "@/constants/FontSize";
import { NavigationProp } from "@/types/Navigation";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

const EmptyFavorites = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View>
      <Text style={Styles.title}>No favorites yet !🙁</Text>
      <View style={Styles.buttonContainer}>
        <CustomButton onPress={() => navigation.navigate("Home")}>
          Get started
        </CustomButton>
      </View>
    </View>
  );
};

export default EmptyFavorites;

const Styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: FontSize["2xl"],
    marginVertical: 8,
    textAlign: "center",
  },
  buttonContainer: {
    width: 140,
    marginHorizontal: "auto",
    marginTop: 12,
  },
});
