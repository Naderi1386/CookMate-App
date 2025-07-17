import Layout from "@/components/ui/Layout";
import { getRecipes } from "@/services/getRecipes";
import { useEffect } from "react";
import { Text } from "react-native";

const Home = () => {
  useEffect(() => {
    const request = async () => {
      await getRecipes("10");
    };
    request();
  }, []);
  return (
    <Layout>
      <Text>sss</Text>
    </Layout>
  );
};

export default Home;
