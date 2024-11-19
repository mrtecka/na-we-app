import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import BillBoard from "../../assets/images/bad_transformer_cinco_ranch.png";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import oButton from "../../assets/icons/onboardingButton3.png";

export default function OnboardingTwo() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.billboard}>
        <Image source={BillBoard} style={styles.billboardImage} />
        <LinearGradient
          colors={["transparent", "#fff"]}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
      </View>
      <Text style={styles.pageHeader}>Make a Difference Today</Text>
      <Text style={styles.paragraph}>
        Identify Local Issues and Contribute to Real Solutions
      </Text>
      <View style={styles.cta}>
        <Pressable onPress={() => navigation.navigate("AuthOptions")}>
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
    paddingHorizontal: 15,
    color: "#7F7F7F",
  },
  cta: {
    flex: 1,
    alignItems: "center",
  },
});
