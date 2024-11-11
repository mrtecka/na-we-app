import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import { getAllProjects } from "../utils/apiCalls";
import { Link } from "expo-router";
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
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ marginBottom: 40 }}>
        <Text style={styles.pageTitle}>Projects</Text>
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <Pressable style={styles.project} key={project.id}>
              <Image source={project.media} style={styles.image} />
              <Text style={styles.location}>{project.location}</Text>
              <Text style={styles.title}>{project.title}</Text>
              <Text style={styles.status}>{project.status}</Text>
            </Pressable>
          </Link>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingVertical: 20,
    paddingHorizontal: 15,
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
