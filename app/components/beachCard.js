import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MasterStyles from "../styles/beachCards";

/**
 * Renders a beach card components containing data about the beach
 *
 * @param {*} { beach } The beach whose data to render
 * @return {*} a card displaying relevant data about the beach
 */
const BeachCard = ({ beach }) => {
  return beach === null ? (
    <View style={[styles.container, MasterStyles.containerEmpty]}>
      <Text style={styles.title}>Zoom in and select a beach to learn more</Text>
    </View>
  ) : (
    <View
      style={[
        styles.container,
        beach.congestion === 1
          ? MasterStyles.congestionLow
          : beach.congestion === 2
          ? MasterStyles.congestionMed
          : MasterStyles.congestionHigh,
      ]}
    >
      <ScrollView>
        <Text style={styles.title}>{beach.name}</Text>
        <View style={styles.infoRow}>
          <Icon
            style={MasterStyles.amenityIcon}
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
            <Icon
              style={[
                MasterStyles.amenityIcon,
                beach.lifeguarded
                  ? MasterStyles.iconEnabled
                  : MasterStyles.iconDisabled,
              ]}
              name="lifebuoy"
              size={24}
            />
            <Text style={styles.amenityFont}>{`Lifeguard: ${
              beach.lifeguarded ? "Yes" : "No"
            }`}</Text>
          </View>
          <View style={styles.amenity}>
            <Icon
              style={[
                MasterStyles.amenityIcon,
                beach.toilets
                  ? MasterStyles.iconEnabled
                  : MasterStyles.iconDisabled,
              ]}
              name="human-male-female"
              size={24}
            />
            <Text style={styles.amenityFont}>{`Toilets: ${
              beach.toilets ? "Yes" : "No"
            }`}</Text>
          </View>
        </View>
        <View style={styles.amenityRow}>
          <View style={styles.amenity}>
            <Icon
              style={[
                MasterStyles.amenityIcon,
                beach.dogs
                  ? MasterStyles.iconEnabled
                  : MasterStyles.iconDisabled,
              ]}
              name="dog-side"
              size={24}
            />
            <Text style={styles.amenityFont}>{`Dogs: ${
              beach.dogs ? "Yes" : "No"
            }`}</Text>
          </View>
          <View style={styles.amenity}>
            <Icon
              style={[
                MasterStyles.amenityIcon,
                beach.cycling
                  ? MasterStyles.iconEnabled
                  : MasterStyles.iconDisabled,
              ]}
              name="bike"
              size={24}
            />
            <Text style={styles.amenityFont}>{`Cycling: ${
              beach.cycling ? "Yes" : "No"
            }`}</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <Icon
            style={[
              MasterStyles.amenityIcon,
              beach.bbq ? MasterStyles.iconEnabled : MasterStyles.iconDisabled,
            ]}
            name="grill"
            size={24}
          />
          <Text style={styles.amenityFont}>{`BBQ: ${
            beach.bbq ? beach.bbq : "Not permitted"
          }`}</Text>
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
    height: 180,
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
  amenityFont: {
    fontSize: 18,
  },
});

export default BeachCard;
