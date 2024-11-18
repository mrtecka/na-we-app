import React, { useEffect, useState } from "react";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./navigation/tabs";
import { onAuthStateChanged, User } from "firebase/auth";
import { FIREBASE_AUTH } from "./utils/firebase";
import OnboardingStack from "./navigation/onboardingStack";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(User);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("user", user);
      setUser(user);
    });
  });
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="OnboardingStack">
          {user ? (
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name="OnboardingStack"
              component={OnboardingStack}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
