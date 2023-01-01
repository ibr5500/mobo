import { StyleSheet, View, SafeAreaView, Alert, Button, Platform, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, ContainerStyle]}>
      <Button
        color="orange"
        title="Click me!"
        onPress={() => Alert.alert("My title", (text) => console.log(text))}
      />
    </SafeAreaView>
  );
}

const ContainerStyle = { backgroundColor: "dodgerblue" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
