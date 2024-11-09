import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../screens/PostsScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import CreateScreen from "../screens/CreateScreen";
import ExploreScreen from "../screens/ExploreScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Icon from "react-native-vector-icons/MaterialIcons";
import NaWe from "../assets/logos/logo.png";
import NewItemIcon from "../components/NewItemIcon/NewItemIcon";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.tab,
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
          headerTitle: () => (
            <View style={styles.header}>
              <Image
                source={NaWe}
                style={{ height: 20, width: "100%", objectFit: "contain" }}
              />
            </View>
          ),
          headerTitleStyle: {},
          headerShadowVisible: false,
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
          headerTitle: () => (
            <View style={styles.header}>
              <Image
                source={NaWe}
                style={{ height: 20, width: "100%", objectFit: "contain" }}
              />
            </View>
          ),
          headerTitleStyle: {},
          headerShadowVisible: false,
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          // tabBarIcon: ({ focused }) => <View></View>,
          // tabBarIconStyle: { display: "none" },
          tabBarIcon: (props) => <NewItemIcon {...props} />,
          headerTitle: () => (
            <View style={styles.header}>
              <Text>Nevermind</Text>
              <Text style={styles.pageTitle}>Create</Text>
              <Text style={styles.pageTitleButton}>Post</Text>
            </View>
          ),
          headerTitleStyle: {
            color: "red",
          },
          headerShadowVisible: false,
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
  tab: {
    position: "absolute",
    bottom: 0,
    left: 5,
    right: 5,
    elevation: 0,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    height: 90,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  header: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pageTitle: {
    fontWeight: "bold",
    fontSize: 17,
  },
  pageTitleButton: {
    backgroundColor: "#f05a24",
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 15,
    overflow: "hidden",
    color: "#fff",
    fontSize: 16,
  },
});
