import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import NaWe from "../assets/logos/nawe.png";

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <Image source={NaWe} style={{ height: 30, objectFit: "contain" }} />
      <Text style={styles.text}>Posts that resonate with your neighbors</Text>
      <Text style={styles.paragraph}>
        {" "}
        A problem shared is a problem solved
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#fff",
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
