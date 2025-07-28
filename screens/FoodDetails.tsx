import RecipeDetails from "@/components/feature/details/RecipeDetails";
import Layout from "@/components/ui/Layout";
import { ScreenPropsType } from "@/types/Screens";
import { ScrollView, StyleSheet,  View } from "react-native";

const FoodDetails = ({ route }: ScreenPropsType<"FoodDetails">) => {
 
  return (
    <Layout>
      <View style={Styles.container}>
        <ScrollView>
          <RecipeDetails />
        </ScrollView>
      </View>
    </Layout>
  );
};

export default FoodDetails;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
