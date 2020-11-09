import React from "react";
import { View, FlatList, StyleSheet, Text, SafeAreaView } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

const BeachList = (props) => {
  let beaches = props.beaches;
  let user = props.user;

  // Sort beaches alphabetically by name then sort favourites first
  beaches
    .sort((a, b) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    })
    .sort((a, b) => {
      if (
        user.favouriteBeaches.includes(a.id) &&
        !user.favouriteBeaches.includes(b.id)
      )
        return -1;
    });

  const renderBeachItem = ({ item: beach }) => (
    <View style={styles.item}>
      <MaterialIcon
        name={user.favouriteBeaches.includes(beach.id) ? `star` : `star-border`}
        color="#e0be00"
        size={32}
      />
      <Text style={styles.title}>{beach.name}</Text>
      <MaterialCommunityIcon
        name={
          beach.congestion === 1
            ? `check-circle-outline`
            : beach.congestion === 2
            ? `alert-circle-outline`
            : `minus-circle-outline`
        }
        color={
          beach.congestion === 1
            ? "lightgreen" // Green - low congestion
            : beach.congestion === 2
            ? "darkorange" // Yellow - medium congestion
            : "red" // Red - high congestion
        }
        size={32}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={beaches}
        renderItem={renderBeachItem}
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
  itemFont: {
    fontSize: 24,
  },
  item: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 8,
    marginLeft: 0,
    marginRight: 0,
    marginVertical: 2,
    flexDirection: "row",
  },
  heading: { fontSize: 36, textAlign: "center" },
  title: { fontSize: 24, flexGrow: 1, paddingRight: 8 },
  button: { backgroundColor: "#ff0000" },
  highCongestion: { backgroundColor: "red" },
  midCongestion: { backgroundColor: "yellow" },
  lowCongestion: { backgroundColor: "green" },
});

export default BeachList;
