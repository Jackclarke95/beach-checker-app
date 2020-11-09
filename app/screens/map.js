import React from "react";
import { View, FlatList, StyleSheet, Text, SafeAreaView } from "react-native";
import MapView from "react-native-maps";
import data from "../data/data";

const MapPage = () => {
  return (
    <SafeAreaView>
      <Text style={styles.heading}>Beach Map</Text>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 50.7045,
            longitude: -1.8356,
            latitudeDelta: 0,
            longitudeDelta: 0.26,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "93%",
    padding: 8,
  },
  itemFont: {
    fontSize: 24,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  heading: { fontSize: 36, textAlign: "center" },
  title: { fontSize: 16 },
});

export default MapPage;
