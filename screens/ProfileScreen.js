import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Page Will Go Here</Text>
      <Text> Will contain Settings and Preferences</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  text: {
    color: "orangered",
    fontSize: 25,
    fontWeight: "bold",
  },
});
