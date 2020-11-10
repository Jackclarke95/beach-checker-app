import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";
import Colours from "../styles/colours";

/**
 * Renders the heading displayed throughout the app
 *
 * @return {*} the heading of the app as a header
 */
const Heading = () => {
  return (
    <View style={{ width: "100%" }}>
      <Header
        backgroundColor="#800020"
        centerComponent={{
          text: "BCP Beach Check",
          style: { color: Colours.white, fontSize: 24 },
        }}
      />
    </View>
  );
};

export default Heading;
