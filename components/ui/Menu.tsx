import { Colors } from "@/constants/Colors";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  GestureResponderEvent,
} from "react-native";
import Logo from "./Logo";
import { FontSize } from "@/constants/FontSize";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@/types/Navigation";
import { useOutsideTap } from "@/hooks/useOutsideClick";

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

  // اینجا از هوک استفاده کردیم
  const { ref, handlePress } = useOutsideTap(() => setIsShow(false));

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

  const onRelease = (evt: GestureResponderEvent) => {
    handlePress(evt);
    return false;
  };

  return (
    <Animated.View
      style={[Styles.overlay, { opacity: fadeAnim }]}
      onStartShouldSetResponder={() => true}
      onResponderRelease={onRelease}
    >
      <View ref={ref} style={Styles.container}>
        <View style={Styles.logoWrraper}>
          <Logo height={55} width={55} />
        </View>
        <View style={Styles.mainWrraper}>
          <Text style={Styles.title}>Cook Mate 👩‍🍳</Text>
          <View style={Styles.list}>
            <View style={Styles.listItem}>
              <Ionicons name="home-outline" size={24} color={Colors.main} />
              <Text
                style={Styles.listItemTitle}
                onPress={() => navigation.navigate("Home")}
              >
                Home
              </Text>
            </View>
            <View style={Styles.listItem}>
              <Ionicons name="heart-outline" size={24} color={Colors.main} />
              <Text
                style={Styles.listItemTitle}
                onPress={() => navigation.navigate("Favorites")}
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
    position: "fixed",
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
  },
  logoWrraper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderBottomWidth: 4,
    borderColor: Colors.main,
    paddingHorizontal: 10,
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
    gap: 20,
    marginTop: 12,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  listItemTitle: {
    fontSize: FontSize.lg,
    fontWeight: "600",
  },
});
