import React from "react";
import { View, FlatList, StyleSheet, Text, SafeAreaView } from "react-native";
import data from "../data/data";

const HomePage = () => {
  let notices = data.notices;

  const renderNoticeItem = ({ item: notice }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{notice.message}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>BCP Beach Checker</Text>
      {!notices || notices.length === 0 ? null : ( // Do not render Notices if there are none
        <FlatList
          data={notices}
          renderItem={renderNoticeItem}
          keyExtractor={(n) => n.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemFont: {
    fontSize: 24,
  },
  item: {
    textAlign: "center",
    backgroundColor: "#ff8888",
    padding: 8,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  heading: { fontSize: 36, textAlign: "center" },
  title: { fontSize: 16 },
});

export default HomePage;
