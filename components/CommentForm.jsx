import { useState } from "react";
import { View, StyleSheet, Image, TextInput, Pressable } from "react-native";
import Avatar from "../assets/images/spidy.jpg";
import Icon from "react-native-vector-icons/MaterialIcons";
import { addComment } from "../utils/apiCalls";

export default function CommentForm({ postId, fetchComments }) {
  const [comment, setComment] = useState("");
  const [isActive, setActive] = useState(false);

  const handlePostComment = () => {
    if (!comment) {
      return;
    }

    const commentObject = {
      comment: comment,
    };

    const postComment = async () => {
      await addComment(postId, commentObject);
      setComment("");
      fetchComments();
    };

    postComment();
  };

  return (
    <View style={styles.form}>
      <Image source={Avatar} style={styles.avatar} />
      <TextInput
        onChangeText={setComment}
        keyboardType="default"
        placeholder="How does this impact you?"
        onBlur={() => (setActive(false), setComment(""))}
        onFocus={() => setActive(true)}
        style={isActive ? [styles.inputActive] : [styles.input]}
        value={comment}
      />
      <Pressable onPress={handlePostComment} style={styles.button}>
        <Icon name="send" size={25} color="#9F9F9F" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    width: "100%",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: "50%",
  },
  input: {
    fontSize: 14,
    width: "80%",
    padding: 7.5,
  },
  inputActive: {
    fontSize: 14,
    width: "80%",
    borderColor: "blue",
    padding: 7,
    borderWidth: 0.5,
    borderRadius: 3,
  },
  button: {
    position: "end",
    textAlign: "flex-end",
  },
});
