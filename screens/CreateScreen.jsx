import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  SafeAreaView,
} from "react-native";
import { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Avatar from "../assets/images/spidy.jpg";

export default function CreateScreen() {
  const [caption, setCaption] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [captionInputValidation, setCaptionInputValidation] = useState(true);
  const [imageInputValidation, setImageInputValidation] = useState(true);
  const [imageTypeValidation, setImageTypeValidation] = useState(true);
  const [successfulPost, setSuccessfulPost] = useState(false);
  const [successfulUpload, setSuccessfulUpload] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Nevermind</Text>
        <Text style={styles.pageTitle}>Create</Text>
        <Text style={styles.pageTitleButton}>Post</Text>
      </View>
      <View style={styles.form}>
        <Image source={Avatar} style={styles.avatar} />
        <TextInput
          onChangeText={setCaption}
          keyboardType="default"
          placeholder="What's on your mind?"
          placeholderTextColor="black"
          // onBlur={() => (setActive(false), setComment(""))}
          // onFocus={() => setActive(true)}
          // style={isActive ? [styles.inputActive] : [styles.input]}
          value={caption}
        />
        {/* <Pressable onPress={handlePostComment} style={styles.button}>
          <Icon name="send" size={25} color="#9F9F9F" />
        </Pressable> */}
      </View>
      <View style={styles.addMediaButton}>
        <Icon name="add" size={17.5} color="#fff" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    gap: 20,
  },
  header: {
    paddingVertical: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pageTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  pageTitleButton: {
    backgroundColor: "#f05a24",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    overflow: "hidden",
    color: "#fff",
    fontSize: 16,
  },
  form: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    width: "100%",
    paddingBottom: 5,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: "50%",
  },
  addMediaButton: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#f05a24",
    alignItems: "center",
    justifyContent: "center",
  },
});
