import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Navbar from "./app/navigation/navbar";
import Heading from "./app/navigation/header";

export default function App() {
  console.log("Application Started.", new Date().toLocaleTimeString());

  return (
    <View>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.fullScreen}>
        <Heading />
        <Navbar />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    width: "100%",
    height: "100%",
    paddingBottom: 8,
  },
});
