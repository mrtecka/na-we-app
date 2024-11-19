import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../utils/firebase";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Platform,
} from "react-native";
import { FacebookLoader } from "react-native-easy-content-loader";
import Cover from "../assets/images/workstation.png";
import Avatar from "../assets/images/spidy.jpg";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function ProfileScreen() {
  const [isPostsTabActive, setPostsTabActive] = useState(false);
  const [isProjectsTabActive, setProjectsTabActive] = useState(false);
  const [isSavedTabActive, setSavedTabActive] = useState(false);
  const [isLikedTabActive, setLikedTabActive] = useState(false);
  const auth = FIREBASE_AUTH;
  const logout = async () => {
    // setLoading(true);
    try {
      const response = await signOut(auth);
      // console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  };

  const postsTab = (e) => {
    setPostsTabActive(true);
    setProjectsTabActive(false);
    setSavedTabActive(false);
    setLikedTabActive(false);
  };
  const projectsTab = () => {
    setPostsTabActive(false);
    setProjectsTabActive(true);
    setSavedTabActive(false);
    setLikedTabActive(false);
  };
  const savedTab = () => {
    setPostsTabActive(false);
    setProjectsTabActive(false);
    setSavedTabActive(true);
    setLikedTabActive(false);
  };
  const likedTab = () => {
    setPostsTabActive(false);
    setProjectsTabActive(false);
    setSavedTabActive(false);
    setLikedTabActive(true);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={Cover} style={styles.cover}>
        <Text style={[styles.cta]} onPress={logout}>
          Logout
        </Text>
        <Image source={Avatar} style={styles.avatar} />
        <Text style={[styles.cta, { left: 5 }]}>Edit Profile</Text>
      </ImageBackground>
      <View
        style={{
          alignItems: "center",
          gap: 5,
          bottom: 100,
          paddingHorizontal: 15,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Tony Montana</Text>
        <Text style={{ color: "gray" }}>Lagos, Nigeria</Text>
        <Text style={{ color: "gray", textAlign: "center" }}>
          Web developer looking to leave a better world behind.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          bottom: 70,
        }}
      >
        <Text
          onPress={postsTab}
          style={isPostsTabActive ? styles.activeTab : styles.tabHeader}
        >
          Posts
        </Text>
        <Text
          onPress={projectsTab}
          style={isProjectsTabActive ? styles.activeTab : styles.tabHeader}
        >
          Projects
        </Text>
        <Text
          onPress={savedTab}
          style={isSavedTabActive ? styles.activeTab : styles.tabHeader}
        >
          Saved
        </Text>
        <Text
          onPress={likedTab}
          style={isLikedTabActive ? styles.activeTab : styles.tabHeader}
        >
          Likes
        </Text>
      </View>
      {isPostsTabActive && (
        <Text style={styles.bottomPage}>Posts show up here</Text>
      )}
      {isProjectsTabActive && (
        <Text style={styles.bottomPage}>Projects show up here</Text>
      )}
      {isSavedTabActive && (
        <Text style={styles.bottomPage}>Saved Posts show up here</Text>
      )}
      {isLikedTabActive && (
        <Text style={styles.bottomPage}>Liked Posts show up here</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    gap: 5,
    flex: 1,
  },
  cover: {
    width: "100%",
    height: "45%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  cta: {
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderWidth: 1,
    color: "#605d4d",
    borderColor: "lightgray",
    borderRadius: 30,
    top: 10,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: Platform.OS === "android" ? 100 : "50%",
    borderWidth: 2,
    borderColor: "#f05a24",
    top: -25,
    left: 15,
  },
  tabHeader: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  activeTab: {
    fontSize: 14,
    borderBottomWidth: 2.5,
    borderBottomColor: "#f05a24",
    paddingBottom: 5,
    paddingHorizontal: 10,
  },
  bottomPage: {
    textAlign: "center",
    paddingTop: 50,
    fontSize: 24,
    fontWeight: "bold",
    color: "#f05a24",
  },
});
