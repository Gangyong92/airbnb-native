import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import Explore from "../screens/Main/Explore";
import Saved from "../screens/Main/Saved";
import Map from "../screens/Main/Map";
import Profile from "../screens/Main/Profile";
import colors from "../colors";
import utils from "../utils";
import { Ionicons } from "@expo/vector-icons";
import Room from "../screens/Main/Room";
import Search from "../screens/Main/Search";
import BackBtn from "../components/Auth/BackBtn";

const TabsNavigator = createBottomTabNavigator();
const Tabs = () => (
  <TabsNavigator.Navigator
    tabBarOptions={{
      activeTintColor: colors.red,
      tabStyle: {
        paddingTop: 10,
      },
      labelStyle: {
        textTransform: "uppercase",
        fontWeight: "600",
        paddingTop: 10,
      },
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        const isAndroid = utils.isAndroid();
        let iconName = isAndroid ? "md-" : "ios-";
        if (route.name === "Explore") {
          iconName += "search";
        } else if (route.name === "Saved") {
          iconName += "heart";
        } else if (route.name === "Map") {
          iconName += "map";
        } else if (route.name === "Profile") {
          iconName += "person";
        }
        return (
          <Ionicons
            name={iconName}
            size={24}
            color={focused ? colors.red : "grey"}
          />
        );
      },
    })}
  >
    <TabsNavigator.Screen name="Explore" component={Explore} />
    <TabsNavigator.Screen name="Saved" component={Saved} />
    <TabsNavigator.Screen name="Map" component={Map} />
    <TabsNavigator.Screen name="Profile" component={Profile} />
  </TabsNavigator.Navigator>
);

const MainNavigator = createStackNavigator();
export default () => (
  <MainNavigator.Navigator
    mode="modal"
    screenOptions={{
      headerTitleAlign: "center",
      headerBackTitleVisible: false,
      headerBackImage: () => <BackBtn />,
    }}
  >
    <MainNavigator.Screen
      name="tabs"
      component={Tabs}
      options={{ headerShown: false }}
    />
    <MainNavigator.Screen
      name="RoomDetail"
      component={Room}
      options={{
        headerTransparent: true,
        headerBackground: () => (
          <BlurView
            tint="light"
            intensity={100}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    />
    <MainNavigator.Screen
      name="search"
      component={Search}
      options={{ headerShown: false }}
    />
  </MainNavigator.Navigator>
);
