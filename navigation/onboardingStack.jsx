import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Onboarding from "../screens/Onboarding";
import OnboardingTwo from "../screens/OnboardingTwo";

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
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
