import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import MapView, { Marker, Polygon } from "react-native-maps";
import BeachCard from "../components/beachCard";

const MapPage = (props) => {
  const beaches = props.beaches;
  const initialRegion = props.initialRegion;
  const activeBeach = props.activeBeach;

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

  const [currentBeach, setCurrentBeach] = useState(activeBeach);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={region}
          onRegionChange={setRegion}
        >
          {beaches.map((b) => {
            return (
              <>
                <Marker
                  opacity={region.longitudeDelta < 0.08 ? 1 : 0} // Only show markers when zoomed in enough
                  coordinate={b.location}
                  title={b.name}
                  onPress={() => setCurrentBeach(b)}
                  description={`Congestion: ${
                    b.congestion === 1
                      ? "Low"
                      : b.congestion === 2
                      ? "Medium"
                      : "High"
                  }`}
                />
                <Polygon
                  key={b.id.toString()}
                  coordinates={b.region}
                  onPress={() => setCurrentBeach(b)}
                  strokeColor={
                    b.congestion === 1
                      ? "darkgreen" // Green - low congestion
                      : b.congestion === 2
                      ? "goldenrod" // Yellow - medium congestion
                      : "red" // Red - high congestion
                  }
                  fillColor={
                    b.congestion === 1
                      ? "#74ec849f" // Green - low congestion
                      : b.congestion === 2
                      ? "#ece5769f" // Yellow - medium congestion
                      : "#ec74749f" // Red - high congestion
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
