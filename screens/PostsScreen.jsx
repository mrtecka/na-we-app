import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import { getAllPosts } from "../utils/apiCalls";
import PostCard from "../components/PostCard";
import { InstagramLoader } from "react-native-easy-content-loader";
import NaWe from "../assets/logos/logo.png";

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
    <SafeAreaView style={styles.container}>
      <View style={styles.pageTitle}>
        <Image
          source={NaWe}
          style={{ height: 20, width: "100%", objectFit: "contain" }}
        />
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <PostCard
            key={item.id}
            caption={item.caption}
            media={{ uri: item.media }}
            id={item.id}
            posts={posts}
            dateTime={item.created_at}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 30,
  },
  pageTitle: {
    paddingTop: 15,
  },
});
