import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const BeachCard = (props) => {
  let beach = props.beach;

  return (
    <View style={{ maxHeight: 200 }}>
      <Text style={styles.title}>{beach.name}</Text>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcon
          name={
            beach.congestion === 1
              ? `check-circle-outline`
              : beach.congestion === 2
              ? `alert-circle-outline`
              : `minus-circle-outline`
          }
          color={
            beach.congestion === 1
              ? "lightgreen" // Green - low congestion
              : beach.congestion === 2
              ? "darkorange" // Yellow - medium congestion
              : "red" // Red - high congestion
          }
          size={48}
        />
        <Text>
          {`Congestion: ${
            beach.congestion === 1
              ? "Low"
              : beach.congestion === 2
              ? "Medium"
              : "High"
          }`}
        </Text>
      </View>
      <View style={styles.amenities}>
        <MaterialCommunityIcon
          style={beach.dogs === true ? styles.iconEnabled : styles.iconDisabled}
          name="paw"
          size={48}
        />
        <MaterialCommunityIcon
          style={
            beach.toilets === true ? styles.iconEnabled : styles.iconDisabled
          }
          name="toilet"
          size={48}
        />
        <FontAwesomeIcon
          style={beach.dogs === true ? styles.iconEnabled : styles.iconDisabled}
          name="bicycle"
          size={48}
        />
      </View>
      <View style={styles.amenities}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcon
            style={styles.iconEnabled}
            name="grill"
            size={48}
          />
          <Text>{beach.bbq}</Text>
        </View>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcon
            style={
              beach.lifeguarded === true
                ? styles.iconEnabled
                : styles.iconDisabled
            }
            name="lifebuoy"
            size={48}
          />
          <Text>
            {beach.lifeguarded === false
              ? "No Lifeguard on Duty"
              : beach.lifeguarded}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  iconEnabled: {
    color: "black",
  },
  iconDisabled: {
    color: "lightgrey",
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  amenities: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
});

export default BeachCard;
