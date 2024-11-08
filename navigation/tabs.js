import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../screens/PostsScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import CreateScreen from "../screens/CreateScreen";
import ExploreScreen from "../screens/ExploreScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeIcon from "../assets/icons/search-normal.png";
import PlusIcon from "../assets/icons/add.png";
import NewItemIcon from "../components/NewItemIcon/NewItemIcon";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 5,
          right: 5,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
        },
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          TabBarIcon: ({ focused, color, size }) => (
            <View>
              <HomeIcon width="24" height="24" />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Projects" component={ProjectsScreen} />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={PlusIcon}
              resizeMode="contain"
              style={{ width: 30, height: 30, tintColor: "#fff" }}
            />
          ),
          tabBarButton: (props) => <NewItemIcon {...props} />,
        }}
      />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     color: "#fff",
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
