import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colours from "../styles/colours";

const NoticeCard = (props) => {
  const notice = props.notice;

  return (
    <View style={styles.item}>
      <Icon style={styles.icon} name="alert-outline" size={36} />
      <Text style={styles.text}>{notice.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 2,
    backgroundColor: Colours.lightRed,
    borderColor: Colours.darkRed,
    flexDirection: "column",
    alignItems: "center",
    padding: 8,
    marginVertical: 4,
  },
  icon: {
    paddingRight: 4,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default NoticeCard;
