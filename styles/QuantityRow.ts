import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 15,
  },
  text: {
    color: COLORS.lightblack,
    fontSize: 18,
    fontFamily: "semibold",
  },
  bordered: {
    borderColor: COLORS.border,
  },
  quantityBox: {
    height: 45,
    width: 45,
    borderWidth: 1,
    borderRadius: 17,
    overflow: "hidden",
    borderColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
});

export default styles;
