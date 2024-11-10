import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import CommentCard from "./CommentCard";
import { getPostComments, getAllPosts } from "../utils/apiCalls";
// import Loading from "./Loading/Loading";
// import CommentForm from "./CommentForm";

export default function CommentSection({ postId, posts }) {
  const [comments, setComments] = useState(null);
  const [threeComments, setThreeComments] = useState(null);

  const validPost = posts.find((post) => post.id === Number(postId));

  useEffect(() => {
    fetchComments();
  }, []);

  if (!validPost) {
    return <Text>Please provide a valid Post ID</Text>;
  }

  const fetchComments = async () => {
    const commentsData = await getPostComments(postId);
    const threeComments = commentsData.slice(0, 3);
    setComments(commentsData);
    setThreeComments(threeComments);
  };

  if (validPost && !comments) {
    return (
      <View>
        <Text className="comments__text"> Be the first to respond</Text>
        {/* <CommentForm postId={postId} fetchComments={fetchComments} /> */}
      </View>
    );
  }

  if (!comments) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View style={styles.comments}>
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
      {/* <Text
        style={styles.comments}
        className={`comments__text ${
          comments.length < 3 ? "comments__text--hidden" : ""
        }`}
      >
        View all comments ({comments.length})
      </Text> */}
      {/* <CommentForm postId={postId} fetchComments={fetchComments} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  comments: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    gap: 10,
  },
  // avatar: {
  //   height: 30,
  //   width: 30,
  //   borderRadius: "50%",
  // },
  // comment: {
  //   fontSize: 14,
  // },
});
