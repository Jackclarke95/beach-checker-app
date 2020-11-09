import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import HomePage from "../screens/home";
import MapPage from "../screens/map";
import BeachList from "../screens/beachList";
import Faq from "../screens/faq";

const Tab = createBottomTabNavigator();

function Navbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={"pink"}
        inactiveColor={"#fff"}
        barStyle={{ backgroundColor: "#800020" }}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarLabel: "Home",
            tabBarAccessibilityLabel: "Home page",
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Beaches"
          component={BeachList}
          options={{
            tabBarLabel: "Beaches",
            tabBarAccessibilityLabel: "Beaches page",
            tabBarIcon: ({ color }) => (
              <Icon name="beach-access" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapPage}
          options={{
            tabBarLabel: "Map",
            tabBarAccessibilityLabel: "Map page",
            tabBarIcon: ({ color }) => (
              <Icon name="map" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="FAQ"
          component={Faq}
          options={{
            tabBarLabel: "FAQ",
            tabBarAccessibilityLabel: "FAQ page",
            tabBarIcon: ({ color }) => (
              <Icon name="help" size={26} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navbar;
