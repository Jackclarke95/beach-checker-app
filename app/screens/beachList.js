import React from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import BeachListCard from "../components/beachListCard";
import Colours from "../styles/colours";

const BeachList = ({ navigation, route }) => {
  const user = route.params.user;

  // Sort beaches alphabetically by name then sort favourites first
  let beaches = route.params.beaches
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
        renderItem={({ item: beach }) => <BeachListCard beach={beach} navigation={navigation} />}
        keyExtractor={(b) => b.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.white,
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
});

export default BeachList;
