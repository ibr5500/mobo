import React from "react";
import { Image, StyleSheet } from "react-native";

export default function ViewImageScreen() {
  return (
    <Image
      style={styles.image}
      source={require("../../assets/chair.jpg")}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});
