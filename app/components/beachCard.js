import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const BeachCard = (props) => {
  if (props.beach === null) {
    return (
      <View style={[styles.container, styles.containerEmpty]}>
        <Text style={styles.title}>
          Zoom in to select a beach to learn more
        </Text>
      </View>
    );
  }

  let beach = props.beach;

  return (
    <View
      style={[
        styles.container,
        beach.congestion === 1
          ? styles.congestionLow
          : beach.congestion === 2
          ? styles.congestionMed
          : styles.congestionHigh,
      ]}
    >
      <ScrollView>
        <Text style={styles.title}>{beach.name}</Text>
        <View style={styles.infoRow}>
          <Icon
            style={styles.amenityIcon}
            name={
              beach.congestion === 1
                ? `check-circle-outline`
                : beach.congestion === 2
                ? `alert-circle-outline`
                : `minus-circle-outline`
            }
            size={24}
          />
          <Text style={styles.amenityFont}>
            {beach.congestion === 1
              ? "Low congestion"
              : beach.congestion === 2
              ? "Congested, stay alert"
              : "Avoid, social distancing difficult"}
          </Text>
        </View>
        {beach.notes ? (
          <View style={styles.infoRow}>
            <Text style={{ textAlign: "justify" }}>{beach.notes}</Text>
          </View>
        ) : null}

        <View style={styles.amenityRow}>
          <View style={styles.amenity}>
            <Icon style={styles.amenityIcon} name="lifebuoy" size={24} />
            <Text style={styles.amenityFont}>{`Lifeguard: ${
              beach.lifeguarded ? "Yes" : "No"
            }`}</Text>
          </View>
          <View style={styles.amenity}>
            <Icon style={styles.amenityIcon} name="human-male-male" size={24} />
            <Text style={styles.amenityFont}>{`Toilets: ${
              beach.toilets ? "Yes" : "No"
            }`}</Text>
          </View>
        </View>
        <View style={styles.amenityRow}>
          <View style={styles.amenity}>
            <Icon style={styles.amenityIcon} name="dog-side" size={24} />
            <Text style={styles.amenityFont}>{`Dogs: ${
              beach.dogs ? "Yes" : "No"
            }`}</Text>
          </View>
          <View style={styles.amenity}>
            <Icon style={styles.amenityIcon} name="bike" size={24} />
            <Text style={styles.amenityFont}>{`Cycling: ${
              beach.cycling ? "Yes" : "No"
            }`}</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <Icon style={styles.amenityIcon} name="grill" size={24} />
          <Text style={styles.amenityFont}>{`BBQ: ${beach.bbq}`}</Text>
        </View>
      </ScrollView>
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
    height: 170,
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
    borderColor: "darkorange",
  },
  congestionHigh: {
    backgroundColor: "#ec74749f",
    borderColor: "red",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 4,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 4,
  },
  amenityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amenity: {
    flexDirection: "row",
    width: "50%",
  },
  flexGrow: 1,
  amenityFont: {
    fontSize: 18,
  },
  amenityIcon: {
    paddingRight: 4,
  },
});

export default BeachCard;
