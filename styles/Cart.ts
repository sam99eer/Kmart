import { COLORS } from "@constants/Colors";
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    position: "relative",
  },
  header: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerTxt: {
    textAlign: "center",
    color: COLORS.lightblack,
    fontSize: 20,
    fontFamily: "bold",
  },
  list: {
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 60,
  },
  emptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height / 1.5,
  },
  subHeading: {
    fontFamily: "regular",
    fontSize: 14,
    color: COLORS.grey,
  },
  pv16: {
    paddingVertical: 16,
  },
  buttonContainer: {
    position: "absolute",
    width: "100%",
    bottom: 20,
    paddingHorizontal: 24,
  },
  btnHolder: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  tag: {
    color: COLORS.white,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: COLORS.tagBg,
    fontSize: 14,
    fontFamily: "semibold",
    position: "absolute",
    right: 24,
  },
});

export default styles;
