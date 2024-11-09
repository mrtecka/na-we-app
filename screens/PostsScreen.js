import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { getAllPosts } from "../utils/apiCalls";
import PostCard from "../components/PostCard/PostCard";

// import Project from "../assets/images/bad_transformer_cinco_ranch.png";

export default function PostsScreen() {
  const [posts, setPosts] = useState(null);

  // const { currentUser } = useAuth();

  const fetchPosts = async () => {
    const postsData = await getAllPosts();
    postsData.sort().reverse();
    setPosts(postsData);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (!posts) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image />
        <View>
          <Text></Text>
          <Text></Text>
        </View>
      </View>
      {posts.map((post) => (
        <PostCard
          style={styles.post}
          key={post.id}
          caption={post.caption}
          media={post.media}
          id={post.id}
          posts={posts}
          dateTime={post.created_at}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 90,
    backgroundColor: "#f6f6f6",
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
