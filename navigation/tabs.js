import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../screens/PostsScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import CreateScreen from "../screens/CreateScreen";
import ExploreScreen from "../screens/ExploreScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Icon from "react-native-vector-icons/MaterialIcons";
import NewItemIcon from "../components/NewItemIcon/NewItemIcon";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 5,
          right: 5,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                name="home"
                size={25}
                color={focused ? "#f05a24" : "#7F7F7F"}
                style={{ paddingBottom: 5, paddingTop: 5 }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Projects"
        component={ProjectsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                name="task"
                size={25}
                color={focused ? "#f05a24" : "#7F7F7F"}
                style={{ paddingBottom: 5, paddingTop: 5 }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarButton: (props) => <NewItemIcon {...props} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        style={{ justifyContent: "center", alignItems: "center" }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                name="public"
                size={25}
                color={focused ? "#f05a24" : "#7F7F7F"}
                style={{ paddingBottom: 5, paddingTop: 5 }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                name="person"
                size={25}
                color={focused ? "#f05a24" : "#7F7F7F"}
                style={{ paddingBottom: 5, paddingTop: 5 }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
