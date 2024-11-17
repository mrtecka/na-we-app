import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function AuthN() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={20} color="gray" />
        <Text style={styles.pageTitle}>Create an account</Text>
        <Text> </Text>
      </View>
      <Text style={styles.paragraph}>
        Begin with creating new free account. This helps access everything on
        NaWe.
      </Text>
      <Pressable
        style={[styles.cta, { backgroundColor: "#F05924" }]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>
          Continue with Email
        </Text>
      </Pressable>
      <View style={styles.ctaContainer}>
        <Pressable
          style={[styles.cta, { backgroundColor: "#F05924" }]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>Log in</Text>
        </Pressable>
        <Pressable
          style={styles.cta}
          onPress={() => navigation.navigate("Login")}
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
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
    gap: 10,
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
    fontSize: 16,
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
    fontSize: 14,
    paddingHorizontal: 15,
    color: "#000",
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
