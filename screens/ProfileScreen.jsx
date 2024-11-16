import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../utils/firebase";
import { Text, StyleSheet, SafeAreaView, Button } from "react-native";

export default function ProfileScreen() {
  const auth = FIREBASE_AUTH;
  const logout = async () => {
    // setLoading(true);
    try {
      const response = await signOut(auth);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Profile Page Will Go Here</Text>
      <Text> Will contain Settings and Preferences</Text>
      <Button title="Logout" onPress={logout} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  text: {
    color: "orangered",
    fontSize: 25,
    fontWeight: "bold",
  },
});
