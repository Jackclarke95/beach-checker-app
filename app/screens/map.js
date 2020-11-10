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
          {beaches.map((beach) => {
            return (
              <>
                <Marker
                  opacity={region.longitudeDelta < 0.08 ? 1 : 0}
                  coordinate={beach.location}
                  title={beach.name}
                  onPress={() => setCurrentBeach(beach)}
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
