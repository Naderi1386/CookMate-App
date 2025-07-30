import { Colors } from "@/constants/Colors";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import Logo from "./Logo";
import { FontSize } from "@/constants/FontSize";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NavigationProp } from "@/types/Navigation";

const Menu = ({
  isShow,
  setIsShow,
}: {
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(isShow);
  const navigation = useNavigation<NavigationProp>();
  const { name } = useRoute();

  useEffect(() => {
    if (isShow) {
      setVisible(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        setVisible(false);
      });
    }
  }, [isShow, fadeAnim]);

  if (!visible) return null;

  return (
    <Animated.View style={[Styles.overlay, { opacity: fadeAnim }]}>
      <View style={Styles.container}>
        <View style={Styles.closeIconWrraper}>
          <Ionicons
            name="close"
            size={28}
            color={Colors.main}
            onPress={() => setIsShow(false)}
          />
        </View>

        <View style={Styles.logoWrraper}>
          <Logo height={55} width={55} />
        </View>
        <View style={Styles.mainWrraper}>
          <Text style={Styles.title}>Cook Mate 👩‍🍳</Text>
          <View style={Styles.list}>
            <View
              style={[
                Styles.listItem,
                name === "Home" && { backgroundColor: Colors.grey },
              ]}
            >
              <Ionicons name="home-outline" size={24} color={Colors.main} />
              <Text
                style={Styles.listItemTitle}
                onPress={() => {
                  setIsShow(false);
                  setTimeout(() => {
                    navigation.navigate("Home");
                  }, 500);
                }}
              >
                Home
              </Text>
            </View>
            <View
              style={[
                Styles.listItem,
                name === "Favorites" && { backgroundColor: Colors.grey },
              ]}
            >
              <Ionicons name="heart-outline" size={24} color={Colors.main} />
              <Text
                style={Styles.listItemTitle}
                onPress={() => {
                  setIsShow(false);
                  setTimeout(() => {
                    navigation.navigate("Favorites");
                  }, 500);
                }}
              >
                Favorites
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default Menu;

const Styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 10000,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  container: {
    width: 265,
    height: "100%",
    backgroundColor: Colors.white,
    borderRightWidth: 4,
    borderColor: Colors.sub,
    paddingVertical: 6,
    position: "relative",
  },
  logoWrraper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    borderBottomWidth: 4,
    borderColor: Colors.main,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  mainWrraper: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 8,
    paddingBottom: 14,
  },
  list: {
    flexDirection: "column",
    gap: 4,
    marginTop: 12,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 8,
  },
  listItemTitle: {
    fontSize: FontSize.lg,
    fontWeight: "600",
  },
  closeIconWrraper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    paddingRight: 8,
  },
});
