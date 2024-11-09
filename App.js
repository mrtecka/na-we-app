import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";

const App = () => {
  return (
    <NavigationContainer style={{ marginBottom: 20 }}>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({
//   app: {
//     flex: 1,
//     color: "#fff",
//     backgroundColor: "#f3f3f3",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
