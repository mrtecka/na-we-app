import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Project from "../assets/images/bad_transformer_cinco_ranch.png";

export default function ProjectsScreen() {
  return (
    <ScrollView>
      <Text style={styles.pageTitle}>Projects</Text>
      <View style={styles.container}>
        <Image source={Project} style={styles.image} />
        <Text style={styles.location}>Cinco Avenue, El Rancho</Text>
        <Text style={styles.title}>
          Replacement Transformer on Cinco Avenue
        </Text>
        <Text style={styles.status}>In progress</Text>
      </View>
      <View style={styles.container}>
        <Image source={Project} style={styles.image} />
        <Text style={styles.location}>Cinco Avenue, El Rancho</Text>
        <Text style={styles.title}>
          Replacement Transformer on Cinco Avenue
        </Text>
        <Text style={styles.status}>In progress</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#f6f6f6",
    justifyContent: "center",
    padding: 20,
    gap: 10,
  },
  pageTitle: {
    paddingTop: 15,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    height: 350,
    width: "100%",
    objectFit: "contain",
    borderRadius: 18,
    alignSelf: "center",
  },
  location: {
    color: "#7f7f7f",
    fontSize: 12,
  },
  status: {
    fontSize: 12,
    textTransform: "uppercase",
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
