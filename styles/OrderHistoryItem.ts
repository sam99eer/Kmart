import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 8,
    borderRadius: 12,
    backgroundColor: COLORS.border,
    overflow: "hidden",
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.border,
  },
  title: {
    color: COLORS.lightblack,
    fontSize: 18,
    fontFamily: "semibold",
    maxWidth: "90%",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
  icon: {
    position: "absolute",
    right: 8,
    top: 7,
  },
});

export default styles;
