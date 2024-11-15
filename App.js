import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";

const App = () => {
  return (
    <NavigationContainer style={{ marginBottom: 20, backgroundColor: "#fff" }}>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
