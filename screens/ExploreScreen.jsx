import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import NaWe from "../assets/logos/nawe-white2.png";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={NaWe} style={{ height: 30, objectFit: "contain" }} />
      <Text style={styles.text}>Explore the World's problems</Text>
      <Text style={styles.paragraph}>
        {" "}
        Will provide a page where people can search for projects from all over
        the world
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orangered",
    padding: 5,
    gap: 10,
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  paragraph: {
    textAlign: "center",
    color: "white",
  },
});
