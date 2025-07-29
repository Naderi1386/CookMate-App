import { FontSize } from "@/constants/FontSize";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import Separator from "@/components/common/recipes/Separator";
import { useGetRecipeDetails } from "@/hooks/useGetRecipeDetails";
import Loading from "@/components/ui/Loading";
const RecipeDetails = ({ id }: { id: string }) => {
  const { isGettingRecipeDetails, recipeDetails } = useGetRecipeDetails(id);
  
  if (isGettingRecipeDetails) return <Loading color={Colors.main} size={45} />;

  return (
    <View>
      <View>
        <View>
          <Image
            style={Styles.img}
            source={{
              uri: "https://img.spoonacular.com/recipes/716429-556x370.jpg",
            }}
          />
        </View>
        <Text style={Styles.title}>
          Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
        </Text>
        <View style={Styles.smallDetailsWrraper}>
          <View style={Styles.smallDetails}>
            <Ionicons name="time-outline" size={38} color={Colors.main} />
            <Text>Ready In 45 mins</Text>
          </View>
          <View style={Styles.smallDetails}>
            <Ionicons name="barbell-outline" size={38} color={Colors.main} />
            <Text>Difficulty : Easy</Text>
          </View>
        </View>
      </View>
      <View style={Styles.listContainer}>
        <FlatList
          data={[
            {
              name: "cheese",
              original: "2 tbsp grated cheese (I used romano)",
            },
            {
              name: "cheese",
              original: "2 tbsp grated cheese (I used romano)",
            },
            {
              name: "cheese",
              original: "2 tbsp grated cheese (I used romano)",
            },
            {
              name: "cheese",
              original: "2 tbsp grated cheese (I used romano)",
            },
          ]}
          renderItem={({ item, index }) => (
            <Text style={Styles.listItem}>
              {index + 1} : {item.name}( {item.original} )
            </Text>
          )}
          ItemSeparatorComponent={Separator}
        />
      </View>
    </View>
  );
};

export default RecipeDetails;

const Styles = StyleSheet.create({
  img: {
    width: 400,
    height: 185,
    resizeMode: "cover",
    borderRadius: 8,
  },
  title: {
    marginTop: 10,
    fontSize: FontSize.lg,
    fontWeight: "bold",
    textAlign: "center",
  },
  smallDetailsWrraper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 24,
    gap: 42,
  },
  smallDetails: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    alignItems: "center",
  },
  listContainer: {
    marginVertical: 20,
  },
  listItem: {
    fontSize: FontSize.md,
    fontWeight: "600",
    marginVertical: 6,
  },
});
