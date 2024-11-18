import { createStackNavigator } from "@react-navigation/stack";
import ProjectsScreen from "../screens/ProjectsScreen";
import ProjectDetails from "../screens/ProjectDetails";

export default function ProjectStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProjectsScreen"
        component={ProjectsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProjectDetails"
        component={ProjectDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
