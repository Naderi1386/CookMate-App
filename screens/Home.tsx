import Layout from "@/components/ui/Layout";
import { useGetRecipes } from "@/hooks/useGetRecipes";

import { Text } from "react-native";

const Home = () => {
  const { data } = useGetRecipes();
  return (
    <Layout>
      <Text>sss</Text>
    </Layout>
  );
};

export default Home;
