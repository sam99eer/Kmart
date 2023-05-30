import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: 30,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingVertical: 30,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightCol: {
    justifyContent: "space-between",
    flex: 1,
  },
  image: {
    maxHeight: 87,
    maxWidth: 87,
  },
  heading: {
    fontFamily: "bold",
    fontSize: 16,
    color: COLORS.lightblack,
  },
  price: {
    fontFamily: "semibold",
    fontSize: 18,
    color: COLORS.lightblack,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    justifyContent: "center",
    maxHeight: 87,
  },
});

export default styles;
