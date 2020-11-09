import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import Home from "../screens/home";
import BeachList from "../screens/beachList";
import FAQ from "../screens/faq";


const Tab = createBottomTabNavigator();

function Navbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
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
          component={Home}
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
          component={FAQ}
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
