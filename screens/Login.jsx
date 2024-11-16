import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import { FIREBASE_AUTH } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <KeyboardAvoidingView> */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Enter Email"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter Password"
          autoCapitalize="none"
        />
      </View>
      <View>
        <Button title="Login" onPress={signIn} />
        <Button title="Create Account" onPress={signUp} />
      </View>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 15,
  },
  inputContainer: { width: "100%", gap: 10, alignItems: "center" },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: "50%",
  },
  label: {
    alignSelf: "left",
    paddingLeft: 20,
    color: "gray",
  },
  input: {
    fontSize: 14,
    width: "100%",
    padding: 7.5,
    borderWidth: 0.5,
    borderRadius: 3,
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
