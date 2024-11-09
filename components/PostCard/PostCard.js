import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
// import { vh } from "react-native-viewport-units";
import Icon from "react-native-vector-icons/MaterialIcons";
import NaWe from "../../assets/icons/nawe.png";
import avatar from "../../assets/images/jdough.jpg";
// import CommentSection from "../CommentSection/CommentSection";
import { timeAGo } from "../../utils/timeAGo";

export default function PostCard({ caption, media, id, posts, dateTime }) {
  const timestamp = timeAGo(dateTime);

  return (
    <View style={styles.postCard}>
      <View style={styles.metadata}>
        <Image source={avatar} style={styles.avatar} />
        <View style={styles.metadataText}>
          <Text>Tecka B</Text>
          <Text>{timestamp}</Text>
        </View>
      </View>
      <Text style={styles.caption}>{caption}</Text>
      <Image source={media} style={styles.media} />
      <View style={styles.icons}>
        <View style={styles.iconsLeft}>
          <Icon name="favorite-outline" size={25} color="black" />
          <Image source={NaWe} style={styles.naweIcon} />
          <Icon name="folder" size={25} color="#f05a24" />
        </View>
        <Icon name="bookmark-outline" size={25} color="black" />
      </View>
      {/* <CommentSection postId={id} posts={posts} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  postCard: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#00000033",
    gap: 5,
  },
  container: {
    marginBottom: 90,
    backgroundColor: "#f6f6f6",
  },
  metadata: {
    flex: 1,
    flexDirection: "row",
    gap: 15,
    paddingBottom: 10,
  },
  metadataText: {
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: "50%",
  },
  post: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#00000033",
    gap: 5,
  },
  media: {
    height: 200,
    width: "100%",
    objectFit: "cover",
    borderRadius: 10,
    alignSelf: "center",
  },
  icons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconsLeft: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
  naweIcon: {
    height: 20,
    // width: "20%",
    objectFit: "contain",
  },
});
