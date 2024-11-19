import React from "react";
import { Text, View, StyleSheet, Image, Platform } from "react-native";
import Avatar from "../assets/images/mandy.jpg";

export default function CommentCard({ comment }) {
  return (
    <View style={styles.commentCard}>
      <Image source={Avatar} style={styles.avatar} />
      <Text style={styles.comment} numberOfLines={2}>
        {comment.comment}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  commentCard: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    width: "100%",
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: Platform.OS === "android" ? 100 : "50%",
  },
  comment: {
    fontSize: 14,
    width: "85%",
    textAlign: "justify",
  },
});
