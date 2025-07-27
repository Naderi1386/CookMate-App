import { Image, StyleSheet, View } from "react-native";

const Logo = ({ width, height }: { width: number; height: number }) => {
  return (
    <View style={[styles.container, { width, height }]}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSCezZAKy4aJLPVlLu1KoyAcbnU_KNUjxIew&s",
        }}
        style={[styles.logo, { width, height }]}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
    borderRadius: 9999,
  },
  loadingWrapper: {
    position: "absolute",
    zIndex: 1,
  },
});
