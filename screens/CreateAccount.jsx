import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { useState } from "react";
import { FIREBASE_AUTH } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isNameActive, setNameActive] = useState(false);
  const [isEmailActive, setEmailActive] = useState(false);
  const [isPasswordActive, setPasswordActive] = useState(false);
  const [isConfirmPasswordActive, setConfirmPasswordActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <Text style={styles.pageTitle}>Create an account</Text>
      <Text style={styles.paragraph}>
        Enter your info below to create your account
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setName}
          value={name}
          placeholder="Enter Name"
          placeholderTextColor="gray"
          autoCapitalize="none"
          onBlur={() => setNameActive(false)}
          onFocus={() => setNameActive(true)}
          style={isNameActive ? [styles.inputActive] : [styles.input]}
        />
        <TextInput
          onChangeText={setEmail}
          keyboardType="default"
          placeholder="name@example.com"
          placeholderTextColor="gray"
          autoCapitalize="none"
          value={email}
          onBlur={() => setEmailActive(false)}
          onFocus={() => setEmailActive(true)}
          style={isEmailActive ? [styles.inputActive] : [styles.input]}
        />
        <TextInput
          onChangeText={setPassword}
          secureTextEntry={true}
          value={password}
          keyboardType="default"
          placeholder="Enter Password"
          placeholderTextColor="gray"
          autoCapitalize="none"
          onBlur={() => setPasswordActive(false)}
          onFocus={() => setPasswordActive(true)}
          style={isPasswordActive ? [styles.inputActive] : [styles.input]}
        />
        <TextInput
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry={true}
          keyboardType="default"
          placeholder="Confirm Password"
          placeholderTextColor="gray"
          autoCapitalize="none"
          onBlur={() => setConfirmPasswordActive(false)}
          onFocus={() => setConfirmPasswordActive(true)}
          style={
            isConfirmPasswordActive ? [styles.inputActive] : [styles.input]
          }
        />
      </View>
      <View style={styles.ctaContainer}>
        <Pressable
          style={[styles.cta, { backgroundColor: "#F05924" }]}
          onPress={signUp}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Create Account
          </Text>
        </Pressable>
        <Text style={{ color: "#7F7F7F", fontSize: 12, fontWeight: 500 }}>
          OR CONTINUE WITH
        </Text>
        <Pressable style={styles.cta}>
          <Text style={{ color: "#F05924", textAlign: "center" }}>
            Sign Up with Google
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
    justifyContent: "center",
    gap: 10,
  },
  header: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerText: {
    fontSize: 12,
    color: "#3F3F3F",
    fontWeight: 500,
  },
  pageTitle: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  inputContainer: {
    gap: 10,
    paddingHorizontal: 15,
  },
  input: {
    fontSize: 14,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "lightgray",
  },
  inputActive: {
    fontSize: 14,
    borderColor: "#F05924",
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 5,
  },
  pageHeader: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff",
  },
  paragraph: {
    textAlign: "center",
    fontSize: 14,
    paddingHorizontal: 10,
    color: "#000",
    paddingVertical: 10,
  },
  ctaContainer: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: "center",
    gap: 20,
  },
  cta: {
    width: "100%",
    paddingVertical: 15,
    borderWidth: 0.5,
    borderColor: "#F05924",
    borderRadius: 10,
  },
});
