import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { Polygon } from "react-native-maps";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const BeachCard = ({ beach }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View
      onTouchEnd={() => {
        setExpanded(!expanded);
        console.log(expanded);
      }}
      style={[
        styles.container,
        beach.congestion === 1
          ? styles.congestionLow
          : beach.congestion === 2
          ? styles.congestionMed
          : styles.congestionHigh,
      ]}
    >
      <View style={styles.headerRow}>
        <Icon
          style={styles.amenityIcon}
          name={
            beach.congestion === 1
              ? `check-circle-outline`
              : beach.congestion === 2
              ? `alert-circle-outline`
              : `minus-circle-outline`
          }
          size={28}
        />
        <Text style={styles.title}>{beach.name}</Text>
        <Icon
          style={styles.amenityIcon}
          name={expanded ? "chevron-up-circle-outline" : "chevron-down-circle-outline"}
          size={28}
        />
      </View>
      <View style={styles.amenityRow}>
        <View style={styles.amenity}>
          <Icon
            style={[
              styles.amenityIcon,
              beach.lifeguarded ? styles.iconEnabled : styles.iconDisabled,
            ]}
            name="lifebuoy"
            size={24}
          />
        </View>
        <View style={styles.amenity}>
          <Icon
            style={[styles.amenityIcon, beach.toilets ? styles.iconEnabled : styles.iconDisabled]}
            name="human-male-female"
            size={24}
          />
        </View>
        <View style={styles.amenity}>
          <Icon
            style={[styles.amenityIcon, beach.dogs ? styles.iconEnabled : styles.iconDisabled]}
            name="dog-side"
            size={24}
          />
        </View>
        <View style={styles.amenity}>
          <Icon
            style={[styles.amenityIcon, beach.cycling ? styles.iconEnabled : styles.iconDisabled]}
            name="bike"
            size={24}
          />
        </View>
        <View style={styles.amenity}>
          <Icon
            style={[styles.amenityIcon, beach.bbq ? styles.iconEnabled : styles.iconDisabled]}
            name="grill"
            size={24}
          />
        </View>
      </View>
      <View>
        {beach.notes ? (
          <View style={styles.infoRow}>
            <Text style={{ textAlign: "justify" }}>{beach.notes}</Text>
          </View>
        ) : null}
        {expanded ? (
          <MapView
            pitchEnabled={false}
            rotateEnabled={false}
            zoomEnabled={false}
            scrollEnabled={false}
            style={styles.map}
            initialRegion={{
              latitude: beach.location.latitude,
              longitude: beach.location.longitude,
              latitudeDelta: 0,
              longitudeDelta: 0.04,
            }}
          >
            <Polygon
              key={beach.id.toString()}
              coordinates={beach.region}
              strokeColor={
                beach.congestion === 1 ? "darkgreen" : beach.congestion === 2 ? "goldenrod" : "red"
              }
              fillColor={
                beach.congestion === 1
                  ? "#74ec849f"
                  : beach.congestion === 2
                  ? "#ece5769f"
                  : "#ec74749f"
              }
            />
          </MapView>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    overflow: "scroll",
    width: "100%",
    padding: 8,
    marginVertical: 8,
  },
  map: {
    marginTop: 4,
    height: 150,
    width: "100%",
  },
  containerEmpty: {
    backgroundColor: "lightgray",
    borderColor: "gray",
  },
  congestionLow: {
    backgroundColor: "#74ec849f",
    borderColor: "darkgreen",
  },
  congestionMed: {
    backgroundColor: "#ece5769f",
    borderColor: "goldenrod",
  },
  congestionHigh: {
    backgroundColor: "#ec74749f",
    borderColor: "red",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 4,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingBottom: 16,
  },
  amenityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexGrow: 1,
  amenityFont: {
    fontSize: 14,
  },
  amenityIcon: {
    paddingRight: 4,
  },
  iconEnabled: {
    color: "black",
  },
  iconDisabled: {
    color: "#a5a5a57a",
  },
});

export default BeachCard;
