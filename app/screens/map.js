import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import MapView, { Marker, Polygon } from "react-native-maps";

const MapPage = (props) => {
  const beaches = props.beaches;

  let initialRegion = {
    latitude: 50.7045,
    longitude: -1.8355,
    latitudeDelta: 0,
    longitudeDelta: 0.26,
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={initialRegion}>
          {beaches.map((b) => {
            return (
              <>
                <Marker
                  coordinate={b.location}
                  title="Sandbanks TEST"
                  description="Sandbanks TEST DESC"
                />
                <Polygon
                  key={b.id.toString()}
                  coordinates={b.region}
                  strokeColor={
                    b.congestion === 1
                      ? "darkgreen" // Green - low congestion
                      : b.congestion === 2
                      ? "darkorange" // Yellow - medium congestion
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
    height: "100%",
  },
  heading: { fontSize: 36, textAlign: "center" },
  title: { fontSize: 16 },
});

export default MapPage;
