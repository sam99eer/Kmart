import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
  },
  list: {
    paddingBottom: 60,
  },
  para: {
    paddingVertical: 12,
  },
  heading: {
    color: COLORS.lightblack,
    fontSize: 18,
    fontFamily: "semibold",
  },
  body: {
    color: COLORS.lightblack,
    fontSize: 14,
    fontFamily: "regular",
  },
  bold: {
    fontFamily: "semibold",
  },
});

export default styles;
