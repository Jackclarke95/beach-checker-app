import React from "react";
import { View, FlatList, StyleSheet, Text, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BeachListCard from "../components/beachListCard";

const BeachList = (props) => {
  let beaches = props.beaches;
  let user = props.user;

  // Sort beaches alphabetically by name then sort favourites first
  beaches
    .sort((a, b) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    })
    .sort((a, b) => {
      if (user.favouriteBeaches.includes(a.id) && !user.favouriteBeaches.includes(b.id)) return -1;
    });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={beaches}
        renderItem={({ item: beach }) => <BeachListCard beach={beach} />}
        keyExtractor={(b) => b.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
});

export default BeachList;
