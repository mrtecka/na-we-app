import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Pressable,
  Button,
} from "react-native";
import BillBoard from "../assets/images/bad_transformer_cinco_ranch.png";
import backgroundImage from "../assets/images/authOptionsBG.png";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import oButton from "../assets/icons/onboardingButton3.png";

export default function AuthOptions() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.billboard}>
        <Image source={backgroundImage} style={styles.billboardImage} />
        <LinearGradient
          colors={["transparent", "#000"]}
          style={{ position: "absolute", width: "100%", height: "100%" }}
          // start={{ x: 0, y: 0 }}
        />
      </View>
      <Text style={styles.pageHeader}>Be the Change in Your Community</Text>
      <Text style={styles.paragraph}>
        Spot Issues, Share Insights, and Help Fund Solutions
      </Text>
      <View style={styles.cta}>
        <Button
          title="Log in"
          color="#fff"
          backgroundColor="#F05924"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          style={styles.ctaTransparent}
          title="Create Account"
          onPress={() => navigation.navigate("Login")}
        />
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
  billboard: {
    height: "55%",
  },
  billboardImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
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
  cta: {
    flex: 1,
    alignItems: "center",
  },
  ctaTransparent: {
    width: "100%",
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#F05924",
    borderRadius: 30,
    color: "white",
  },
});
