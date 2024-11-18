import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { FacebookLoader } from "react-native-easy-content-loader";
import { ProjectStatus } from "../components/ProjectStatus";
import { getProject } from "../utils/apiCalls";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { goBack } from "expo-router/build/global-state/routing";

export default function ProjectDetails() {
  const [project, setProject] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();

  const { id } = route.params;

  const fetchProject = async () => {
    const projectData = await getProject(id);
    setProject(projectData);
  };

  useEffect(() => {
    fetchProject();
  }, []);

  if (!project) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.pageHeader}>Project Details</Text>
        <View style={{ paddingVertical: 26, gap: 20 }}>
          <FacebookLoader active />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-back"
          size={17.5}
          color="#f05a24"
          onPress={() => navigation.goBack()}
        />
        <Text style={{ fontSize: 16, fontWeight: 500 }}>Project Details</Text>
        <Text> </Text>
      </View>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <Image source={{ uri: project.media }} style={styles.image} />
        <Text style={styles.projectTitle}>{project.title}</Text>
        <View style={styles.locationStatusContainer}>
          <Text style={{ color: "#7f7f7f", fontSize: 13 }}>
            {project.location}
          </Text>
          <ProjectStatus projectStatus={project.status} />
        </View>
        <Text style={{ textAlign: "justify" }}>{project.description}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginBottom: 45,
    gap: 25,
  },
  header: {
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  locationStatusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  projectTitle: {
    paddingVertical: 15,
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    height: 275,
    width: "100%",
    objectFit: "cover",
    borderRadius: 10,
  },
});
