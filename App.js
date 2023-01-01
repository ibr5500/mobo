import {
  Dimensions,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Button,
  Platform,
  StatusBar,
} from "react-native";
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  const { orientation } = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={styles.image}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  image: {
    width: "100%",
    height: orientation ? "80%" : "100%",
  },
});
