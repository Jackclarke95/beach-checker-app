import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import HomePage from "../screens/home";
import MapPage from "../screens/map";
import BeachList from "../screens/beachList";
import FaqPage from "../screens/faq";
import data from "../data/data";

const Tab = createBottomTabNavigator();

function Navbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          options={{
            tabBarLabel: "Home",
            tabBarAccessibilityLabel: "Home page",
            tabBarIcon: ({ color }) => (
              <MaterialIcon name="home" color={color} size={26} />
            ),
          }}
        >
          {(props) => (
            <HomePage
              {...props}
              notices={data.notices}
              beaches={data.beaches}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Beaches"
          options={{
            tabBarLabel: "Beaches",
            tabBarAccessibilityLabel: "Beaches page",
            tabBarIcon: ({ color }) => (
              <MaterialIcon name="beach-access" size={26} color={color} />
            ),
          }}
        >
          {(props) => (
            <BeachList {...props} beaches={data.beaches} user={data.user} />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Map"
          options={{
            tabBarLabel: "Map",
            tabBarAccessibilityLabel: "Map page",
            tabBarIcon: ({ color }) => (
              <MaterialIcon name="map" size={26} color={color} />
            ),
          }}
        >
          {(props) => (
            <MapPage {...props} beaches={data.beaches} activeBeach={null} />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="FAQ"
          options={{
            tabBarLabel: "FAQ",
            tabBarAccessibilityLabel: "FAQ page",
            tabBarIcon: ({ color }) => (
              <MaterialIcon name="help" size={26} color={color} />
            ),
          }}
        >
          {(props) => <FaqPage {...props} faqs={data.faqs} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navbar;
