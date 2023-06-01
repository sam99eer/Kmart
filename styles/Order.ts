import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: COLORS.white,
    flex: 1,
  },
  emptyContainer: {
    alignItems: "center",
    paddingVertical: 24,
  },
  emptyHeaderTxt: {
    textAlign: "center",
    color: COLORS.primary,
    fontSize: 20,
    fontFamily: "bold",
  },
  subHeading: {
    fontFamily: "regular",
    fontSize: 14,
    color: COLORS.grey,
  },
});

export default styles;
