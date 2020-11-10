import React from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import BeachListCard from "../components/beachListCard";
import Colours from "../styles/colours";

/**
 * Renders a list of beaches and data about them, including a button that navigates
 * to the map screen
 *
 * @param {*} { navigation, route } props containing navigation and beach data
 * @return {*} a screen displaying a list of beaches containing each beach's relevant data
 */
const BeachList = ({ navigation, route }) => {
  let beaches = route.params.beaches.sort((a, b) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={beaches}
        renderItem={({ item: beach }) => (
          <BeachListCard beach={beach} navigation={navigation} />
        )}
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
