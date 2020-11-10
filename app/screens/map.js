import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import MapView, { Marker, Polygon } from "react-native-maps";
import BeachCard from "../components/beachCard";

export default MapPage = ({ navigation, route, beaches, initialRegion }) => {
  let activeBeach = null;
  const [currentBeach, setCurrentBeach] = useState(activeBeach);

  if (route.params) {
    activeBeach = route.params.activeBeach;
    console.log(activeBeach);
  }

  setCurrentBeach(activeBeach);

  const [region, setRegion] = useState(
    initialRegion
      ? initialRegion
      : {
          latitude: 50.7045,
          longitude: -1.82,
          latitudeDelta: 0,
          longitudeDelta: 0.28,
        }
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={region} onRegionChange={setRegion}>
          {beaches.map((b) => {
            return (
              <>
                <Marker
                  opacity={region.longitudeDelta < 0.08 ? 1 : 0}
                  coordinate={b.location}
                  title={b.name}
                  onPress={() => setCurrentBeach(b)}
                  description={`Congestion: ${
                    b.congestion === 1 ? "Low" : b.congestion === 2 ? "Medium" : "High"
                  }`}
                />
                <Polygon
                  key={b.id.toString()}
                  coordinates={b.region}
                  onPress={() => setCurrentBeach(b)}
                  strokeColor={
                    b.congestion === 1 ? "darkgreen" : b.congestion === 2 ? "goldenrod" : "red"
                  }
                  fillColor={
                    b.congestion === 1
                      ? "#74ec849f"
                      : b.congestion === 2
                      ? "#ece5769f"
                      : "#ec74749f"
                  }
                />
              </>
            );
          })}
        </MapView>
        <BeachCard beach={currentBeach} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 8,
  },
  itemFont: {
    fontSize: 24,
  },
  map: {
    width: "100%",
    flexGrow: 1,
  },
  heading: { fontSize: 36, textAlign: "center" },
  title: { fontSize: 16 },
});
