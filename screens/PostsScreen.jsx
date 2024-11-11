import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { getAllPosts } from "../utils/apiCalls";
import PostCard from "../components/PostCard";
import { InstagramLoader } from "react-native-easy-content-loader";

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
      <View style={styles.container}>
        <InstagramLoader active />
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          caption={post.caption}
          media={post.media}
          id={post.id}
          posts={posts}
          dateTime={post.created_at}
          style={styles.post}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginBottom: 90,
    backgroundColor: "#fff",
  },
});
