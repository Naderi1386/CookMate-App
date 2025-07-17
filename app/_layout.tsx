import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "@/types/Stack";
import Welcome from "@/screens/Welcome";
import Home from "@/screens/Home";
import FoodDetails from "@/screens/FoodDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const Stack = createNativeStackNavigator<StackParamList>();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FoodDetails" component={FoodDetails} />
      </Stack.Navigator>
    </QueryClientProvider>
  );
}
