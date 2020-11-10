import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import MapView, { Marker, Polygon } from "react-native-maps";
import BeachCard from "../components/beachCard";

/**
 * Renders the map page, containing a navigable map that displays all beaches as well
 * as a card displaying data about the selected beach
 *
 * @param {*} { route } navigation route containing beach data
 * @return {*} a screen displaying a map that displays beaches, and a card displaying
 * data about the selected beach
 */
const MapPage = ({ route }) => {
  const beaches = route.params.beaches;

  const [currentBeach, setCurrentBeach] = useState(
    route.params.activeBeach ?? null
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: route.params.latitude,
            longitude: route.params.longitude,
            latitudeDelta: route.params.latitudeDelta,
            longitudeDelta: route.params.longitudeDelta,
          }}
        >
          {beaches.map((beach) => {
            return (
              <>
                <Marker
                  coordinate={beach.location}
                  title={beach.name}
                  onPress={() => {
                    setCurrentBeach(beach);
                  }}
                  description={`Congestion: ${
                    beach.congestion === 1
                      ? "Low"
                      : beach.congestion === 2
                      ? "Medium"
                      : "High"
                  }`}
                />
                <Polygon
                  key={beach.id.toString()}
                  coordinates={beach.region}
                  onPress={() => setCurrentBeach(beach)}
                  strokeColor={
                    beach.congestion === 1
                      ? "darkgreen"
                      : beach.congestion === 2
                      ? "goldenrod"
                      : "red"
                  }
                  fillColor={
                    beach.congestion === 1
                      ? "#74ec849f"
                      : beach.congestion === 2
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

export default MapPage;
