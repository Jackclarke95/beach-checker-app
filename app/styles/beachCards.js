import { StyleSheet } from "react-native";
import Colours from "./colours";

export default masterStyles = StyleSheet.create({
  containerEmpty: {
    backgroundColor: Colours.lightGrey,
    borderColor: Colours.grey,
  },
  congestionLow: {
    backgroundColor: Colours.lightGreen,
    borderColor: Colours.darkGreen,
  },
  congestionMed: {
    backgroundColor: Colours.lightYellow,
    borderColor: Colours.darkYellow,
  },
  congestionHigh: {
    backgroundColor: Colours.lightRed,
    borderColor: Colours.darkRed,
  },
  amenityIcon: {
    paddingRight: 4,
  },
  iconEnabled: {
    color: Colours.black,
  },
  iconDisabled: {
    color: Colours.lightGrey,
  },
  amenityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
