import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "@/types/Stack";
import Welcome from "@/screens/Welcome";
import Home from "@/screens/Home";
import FoodDetails from "@/screens/FoodDetails";

const Stack = createNativeStackNavigator<StackParamList>();

export default function RootLayout() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Welcome"
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FoodDetails" component={FoodDetails} />
    </Stack.Navigator>
  );
}
