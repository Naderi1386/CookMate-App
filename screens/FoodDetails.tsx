import Layout from "@/components/ui/Layout";
import { ScreenPropsType } from "@/types/Screens";
import { Text, View } from "react-native";

const FoodDetails = ({ route }: ScreenPropsType<"FoodDetails">) => {
  const { id } = route.params;
  return (
    <Layout>
      <View>
        <Text>ID : {id}</Text>
      </View>
    </Layout>
  );
};

export default FoodDetails;
