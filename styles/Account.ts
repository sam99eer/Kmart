import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
  },
  infoRow: {
    flexDirection: "row",
    columnGap: 20,
    alignItems: "center",
    paddingVertical: 24,
  },
  img: {
    padding: 8,
    borderRadius: 99,
    backgroundColor: COLORS.border,
  },
  heading: {
    color: COLORS.lightblack,
    fontSize: 20,
    fontFamily: "bold",
  },
  subHeading: {
    fontFamily: "regular",
    color: COLORS.grey,
    fontSize: 14,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 60,
    position: "relative",
  },
  logout: {
    position: "absolute",
    zIndex: 1,
    left: 24,
  },
});

export default styles;
