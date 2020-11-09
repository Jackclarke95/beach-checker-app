import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

const BeachCard = (props) => {
  let beach = props.beach;

  return (
    <View>
      <Text style={styles.title}>{beach.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
  },
});

export default BeachCard;
