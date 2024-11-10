import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { getAllProjects } from "../utils/apiCalls";
// import Project from "../assets/images/bad_transformer_cinco_ranch.png";

export default function ProjectsScreen() {
  const [projects, setProjects] = useState(null);

  const fetchProjects = async () => {
    const projectsData = await getAllProjects();
    setProjects(projectsData);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (!projects) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Projects</Text>
      {projects.map((project) => (
        <View style={styles.project} key={project.id}>
          <Image source={project.media} style={styles.image} />
          <Text style={styles.location}>{project.location}</Text>
          <Text style={styles.title}>{project.title}</Text>
          <Text style={styles.status}>{project.status}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 90,
    backgroundColor: "#fff",
  },
  pageTitle: {
    paddingTop: 15,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  project: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#00000033",
    gap: 5,
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
});
