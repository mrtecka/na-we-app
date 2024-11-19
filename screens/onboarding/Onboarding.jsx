import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  StatusBar,
} from "react-native";
import BillBoard from "../../assets/images/onboardingBillboard.jpg";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import oButton from "../../assets/icons/onboardingButton1.png";

export default function Onboarding() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.billboard}>
        <Image source={BillBoard} style={styles.billboardImage} />
        <LinearGradient
          colors={["transparent", "#fff"]}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
      </View>
      <Text style={styles.pageHeader}>Welcome to NaWe</Text>
      <Text style={styles.paragraph}>
        Spot, Share, and Support Solutions for a Better Neighborhood
      </Text>
      <View style={styles.cta}>
        <Pressable onPress={() => navigation.navigate("OnboardingTwo")}>
          <Image source={oButton} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("AuthOptions")}>
          <Text style={{ fontSize: 16 }}>Skip</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  },
  paragraph: {
    textAlign: "center",
    fontSize: 16,
    color: "#7F7F7F",
    paddingHorizontal: 15,
  },
  cta: {
    flex: 1,
    alignItems: "center",
  },
});
