import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Navbar from "./app/navigation/navbar";
import Heading from "./app/navigation/header";
import Home from "./app/screens/home";

export default function App() {
  console.log("Application Started.", new Date());

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={{ width: "100%", height: "100%", paddingBottom: 6 }}>
        <Heading />
        <Navbar />
      </SafeAreaView>
    </View>
  );
}

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
