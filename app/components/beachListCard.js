import React, { useState } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import { TabActions } from "@react-navigation/native";
import MapView, { Polygon } from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MasterStyles from "../styles/beachCards";

/**
 * Beach Card component displaying data about the specific beach, as well as
 * a button to navigate to the map components
 *
 * @param {*} { navigation, beach } props containing navigation and beach data
 * @return {*} a card displaying relevant data about the beach including a
 * button to navigate to the map screen
 */
const BeachCard = ({ navigation, beach }) => {
  const [expanded, setExpanded] = useState(false);

  function jumpToMap() {
    navigation.dispatch(TabActions.jumpTo("Map"));
  }

  return (
    <View
      onTouchEnd={() => setExpanded(!expanded)}
      style={[
        styles.container,
        beach.congestion === 1
          ? MasterStyles.congestionLow
          : beach.congestion === 2
          ? MasterStyles.congestionMed
          : MasterStyles.congestionHigh,
      ]}
    >
      <View style={styles.headerRow}>
        <Icon
          style={MasterStyles.amenityIcon}
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
          style={MasterStyles.amenityIcon}
          name={expanded ? "chevron-double-up" : "chevron-double-down"}
          size={28}
        />
      </View>
      <View style={MasterStyles.amenityRow}>
        <View style={styles.amenity}>
          <Icon
            style={[
              MasterStyles.amenityIcon,
              beach.lifeguarded
                ? MasterStyles.iconEnabled
                : styles.iconDisabled,
            ]}
            name="lifebuoy"
            size={24}
          />
        </View>
        <View style={styles.amenity}>
          <Icon
            style={[
              MasterStyles.amenityIcon,
              beach.toilets ? MasterStyles.iconEnabled : styles.iconDisabled,
            ]}
            name="human-male-female"
            size={24}
          />
        </View>
        <View style={styles.amenity}>
          <Icon
            style={[
              MasterStyles.amenityIcon,
              beach.dogs ? MasterStyles.iconEnabled : styles.iconDisabled,
            ]}
            name="dog-side"
            size={24}
          />
        </View>
        <View style={styles.amenity}>
          <Icon
            style={[
              MasterStyles.amenityIcon,
              beach.cycling ? MasterStyles.iconEnabled : styles.iconDisabled,
            ]}
            name="bike"
            size={24}
          />
        </View>
        <View style={styles.amenity}>
          <Icon
            style={[
              MasterStyles.amenityIcon,
              beach.bbq ? MasterStyles.iconEnabled : styles.iconDisabled,
            ]}
            name="grill"
            size={24}
          />
        </View>
      </View>
      <View>
        {beach.notes ? (
          <View>
            <Text>{beach.notes}</Text>
          </View>
        ) : null}
        {expanded ? (
          <>
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
            </MapView>
            <Button title="Explore on Map" onPress={jumpToMap} />
          </>
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
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 4,
  },
  map: {
    marginTop: 4,
    height: 150,
    width: "100%",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingBottom: 16,
  },
  amenityFont: {
    fontSize: 14,
  },
});

export default BeachCard;
