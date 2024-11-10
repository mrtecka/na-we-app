import React from "react";
import { Text, View, StyleSheet, Image, SafeAreaView } from "react-native";
import NaWe from "../assets/icons/nawe-icon.png";

export default function CreateScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Image source={NaWe} style={{ height: 30, objectFit: "contain" }} />
        <Text style={styles.text}>Create to initiate a solution</Text>
        <Text style={styles.paragraph}>
          A dynamic Create page for both posts and projects
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    flex: 1,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
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
