import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import HomePage from "../screens/home";
import MapPage from "../screens/map";
import BeachList from "../screens/beachList";
import Faq from "../screens/faq";
import data from "../data/data";

const Tab = createBottomTabNavigator();

function Navbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          children={() => (
            <HomePage notices={data.notices} beaches={data.beaches} />
          )}
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
          children={() => <BeachList beaches={data.beaches} user={data.user} />}
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
          children={() => <MapPage beaches={data.beaches} />}
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
          children={() => <Faq faqs={data.faqs} />}
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
