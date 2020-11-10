import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";
import Colours from "../styles/colours";

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
