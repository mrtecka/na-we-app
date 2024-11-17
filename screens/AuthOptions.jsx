import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  StatusBar,
  Platform,
} from "react-native";
import backgroundImage from "../assets/images/authOptionsBG.png";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function AuthOptions() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={Platform.OS === "android" ? "light-content" : "dark-content"}
        backgroundColor="#000"
      />
      <View style={styles.hero}>
        <Image source={backgroundImage} style={styles.bgImage} />
        <LinearGradient
          colors={["transparent", "#000"]}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
      </View>
      <Text style={styles.pageHeader}>Be the Change in Your Community</Text>
      <Text style={styles.paragraph}>
        Spot Issues, Share Insights, Help Find Solutions and Provide
        Accountability
      </Text>
      <View style={styles.ctaContainer}>
        <Pressable
          style={[styles.cta, { backgroundColor: "#F05924" }]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>Log in</Text>
        </Pressable>
        <Pressable
          style={styles.cta}
          onPress={() => navigation.navigate("CreateAccount")}
        >
          <Text style={{ color: "#F05924", textAlign: "center" }}>
            Create Account
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    gap: 10,
  },
  hero: {
    height: "55%",
  },
  bgImage: {
    flex: 1,
  },
  pageHeader: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    paddingHorizontal: 15,
    color: "#fff",
  },
  paragraph: {
    textAlign: "center",
    fontSize: 16,
    paddingHorizontal: 15,
    color: "#fff",
  },
  ctaContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
    alignItems: "center",
    gap: 20,
  },
  cta: {
    width: "100%",
    paddingVertical: 15,
    borderWidth: 0.5,
    borderColor: "#F05924",
    borderRadius: 30,
  },
});
