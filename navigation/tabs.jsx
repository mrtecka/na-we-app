import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../screens/PostsScreen";
import ProjectStack from "./projectStack";
import CreateScreen from "../screens/CreateScreen";
import ExploreScreen from "../screens/ExploreScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Icon from "react-native-vector-icons/MaterialIcons";
import NewItemIcon from "../components/NewItemIcon";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          ...styles.tab,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                name="home"
                size={30}
                color={focused ? "#f05a24" : "#7F7F7F"}
                style={{ paddingTop: 1 }}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Projects"
        component={ProjectStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                name="task"
                size={30}
                color={focused ? "#f05a24" : "#7F7F7F"}
                style={{ paddingTop: 1 }}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: (props) => <NewItemIcon {...props} />,
          headerShown: false,
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
                size={30}
                color={focused ? "#f05a24" : "#7F7F7F"}
                style={{ paddingTop: 1 }}
              />
            </View>
          ),
          headerShown: false,
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
                size={30}
                color={focused ? "#f05a24" : "#7F7F7F"}
                style={{ paddingTop: 1 }}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: "#ffffff",
    height: 60,
    shadowColor: "#7F5DF0",
  },
  postHeader: {
    flex: 1,
    flexDirection: "row",
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
