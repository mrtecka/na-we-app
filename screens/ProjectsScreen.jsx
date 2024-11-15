import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  FlatList,
} from "react-native";
import { getAllProjects } from "../utils/apiCalls";
// import { Link } from "expo-router";
import { InstagramLoader } from "react-native-easy-content-loader";
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
      <SafeAreaView style={styles.container}>
        <Text style={styles.pageTitleLoading}>Projects</Text>
        <View style={styles.loadingScreen}>
          <InstagramLoader active />
          <InstagramLoader active />
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Projects</Text>
      <FlatList
        data={projects}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          // <Link href={`/projects/${item.id}`}>
          <Pressable style={styles.project}>
            <Image source={{ uri: item.media }} style={styles.image} />
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.status}>{item.status}</Text>
          </Pressable>
          // </Link>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 45,
  },
  pageTitle: {
    paddingVertical: 15,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  pageTitleLoading: {
    paddingTop: 15,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  project: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#00000033",
    gap: 5,
  },
  image: {
    height: 275,
    width: "100%",
    objectFit: "cover",
    borderRadius: 10,
    alignSelf: "center",
  },
  loadingScreen: {
    paddingVertical: 26,
    gap: 20,
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
