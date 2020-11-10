import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import HomePage from "../screens/home";
import MapPage from "../screens/map";
import BeachList from "../screens/beachList";
import FaqPage from "../screens/faq";
import data from "../data/data";

const Tab = createBottomTabNavigator();

/**
 * Renders a navigation bar and handles navigation to the screens within the app
 *
 * @return {*} the app's navigation bar
 */
function Navbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomePage}
          initialParams={{ beaches: data.beaches, notices: data.notices }}
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
          initialParams={{ beaches: data.beaches, user: data.user }}
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
          initialParams={{
            beaches: data.beaches,
            latitude: 50.7045,
            longitude: -1.82,
            latitudeDelta: 0,
            longitudeDelta: 0.28,
          }}
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
          component={FaqPage}
          initialParams={{ faqs: data.faqs }}
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
