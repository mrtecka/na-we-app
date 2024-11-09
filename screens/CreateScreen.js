import React from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import NaWe from "../assets/logos/nawe.png";

export default function CreateScreen() {
  return (
    <View style={styles.container}>
      <Image source={NaWe} style={{ height: 30, objectFit: "contain" }} />
      <Text style={styles.text}>Create to initiate a solution</Text>
      <Text style={styles.paragraph}>
        A dynamic Create page for both posts and projects
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#f6f6f6",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    gap: 10,
  },
  text: {
    color: "orangered",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  paragraph: {
    textAlign: "center",
  },
});
