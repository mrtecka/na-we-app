import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Profile Page Will Go Here</Text>
      <Text> Will contain Settings and Preferences</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
