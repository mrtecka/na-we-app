import { Text, StyleSheet } from "react-native";

export const ProjectStatus = ({ projectStatus }) => {
  const inProgress = projectStatus === "In Progress";
  const isComplete = projectStatus === "Completed";
  const isCancelled = projectStatus === "In Progress";

  return (
    <Text
      style={
        inProgress
          ? styles.inProgress
          : isComplete
          ? styles.isComplete
          : isCancelled
          ? styles.isCancelled
          : styles.statusText
      }
    >
      {projectStatus}
    </Text>
  );
};

const styles = StyleSheet.create({
  inProgress: { color: "#ffc300", textTransform: "uppercase", fontSize: 13 },
  isComplete: { color: "#158463", textTransform: "uppercase", fontSize: 13 },
  isCancelled: { color: "#d22d2d", textTransform: "uppercase", fontSize: 13 },
  statusText: { color: "gray", textTransform: "uppercase", fontSize: 13 },
});
