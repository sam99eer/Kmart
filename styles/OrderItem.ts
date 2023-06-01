import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  label: {
    color: COLORS.lightblack,
    fontFamily: "semibold",
    fontSize: 18,
  },
  icon: {
    width: 40,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  pressed: {
    opacity: 0.8,
  },
});

export default styles;
