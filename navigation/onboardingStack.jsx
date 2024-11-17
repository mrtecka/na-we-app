import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Onboarding from "../screens/Onboarding";
import OnboardingTwo from "../screens/OnboardingTwo";
import AuthOptions from "../screens/AuthOptions";

export default function OnboardingStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingTwo"
        component={OnboardingTwo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AuthOptions"
        component={AuthOptions}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: "#000",
    height: 60,
    shadowColor: "#7F5DF0",
  },
});
