import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";

const Heading = () => {
  return (
    <View style={{ width: "100%" }}>
      <Header
        backgroundColor="#800020"
        centerComponent={{ text: "BCP Beach Check", style: { color: "#fff" } }}
      />
    </View>
  );
};

export default Heading;
