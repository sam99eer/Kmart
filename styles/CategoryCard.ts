import { COLORS } from "@constants/Colors";
import { Dimensions, StyleSheet } from "react-native";

const halfDeviceWidth = Dimensions.get("window").width / 2 - 32;

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    borderWidth: 1,
    width: halfDeviceWidth < 175 ? halfDeviceWidth : 175,
    alignItems: "center",
    height: 190,
    justifyContent: "center",
    rowGap: 14,
  },
  img: {
    maxWidth: halfDeviceWidth < 175 ? halfDeviceWidth - 20 : 145,
    maxHeight: 120,
    resizeMode: "contain",
  },
  txt: {
    fontFamily: "bold",
    fontSize: 16,
    color: COLORS.lightblack,
  },
});

export default styles;
