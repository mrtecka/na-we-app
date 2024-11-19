import { useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  Text,
  StatusBar,
} from "react-native";
import { FIREBASE_AUTH } from "../../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import GLogo from "../../assets/icons/g-logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailActive, setEmailActive] = useState(false);
  const [isPasswordActive, setPasswordActive] = useState(false);
  const [isFormFilled, setFormFilled] = useState(true);
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();

  const signIn = async () => {
    setLoading(true);

    if (!email || !password) {
      setFormFilled(false);
      return;
    }
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Pressable style={styles.header}>
        <Text
          style={styles.headerText}
          onPress={() => navigation.navigate("CreateAccount")}
        >
          Sign Up
        </Text>
      </Pressable>
      <Text style={styles.pageTitle}>Login</Text>
      <View>
        <Text style={styles.paragraph}>Welcome back</Text>
        <Text style={styles.paragraph}>
          Enter your email and password to continue
        </Text>
      </View>
      <View style={styles.inputContainer}>
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
        {!isFormFilled && (
          <Text style={{ color: "red" }}>
            Please enter your email and password
          </Text>
        )}
      </View>
      <View style={styles.ctaContainer}>
        <Pressable
          style={[
            styles.cta,
            {
              backgroundColor: "#F05924",
              borderColor: "#F05924",
              paddingVertical: 15,
            },
          ]}
          onPress={signIn}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Login
          </Text>
        </Pressable>
        <Text style={{ color: "#7F7F7F", fontSize: 12, fontWeight: 500 }}>
          OR CONTINUE WITH
        </Text>
        <Pressable
          style={[
            styles.cta,
            styles.ctaIcon,
            { borderColor: "lightgray", paddingVertical: 7.5 },
          ]}
        >
          <Image source={GLogo} style={{ width: 35, height: 35 }} />
          <Text style={{ color: "black", textAlign: "center" }}>Google</Text>
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
  paragraph: {
    textAlign: "center",
    fontSize: 14,
    paddingHorizontal: 10,
    color: "#000",
    paddingVertical: 5,
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
  ctaContainer: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 15,
    alignItems: "center",
    gap: 20,
  },
  cta: {
    width: "100%",
    paddingVertical: 15,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  ctaIcon: {
    flexDirection: "row",
    gap: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
