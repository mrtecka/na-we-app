import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../screens/PostsScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import CreateScreen from "../screens/CreateScreen";
import ExploreScreen from "../screens/ExploreScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: true,
        style: {
          position: "absolute",
          bottom: 20,
          elevation: 0,
          backgroundColor: "#fff",
        },
      }}
    >
      <Tab.Screen name="Posts" component={PostsScreen} />
      <Tab.Screen name="Projects" component={ProjectsScreen} />
      <Tab.Screen name="Create" component={CreateScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
