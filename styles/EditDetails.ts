import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
  },
  subContainer: {
    position: "relative",
    paddingVertical: 30,
    rowGap: 16,
  },
  textBox: {
    backgroundColor: COLORS.lightWhite,
    borderRadius: 15,
    color: COLORS.lightblack,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
    fontFamily: "semibold",
    borderWidth: 1,
    borderColor: "transparent",
    opacity: 0.7,
  },
  enabled: {
    borderColor: COLORS.grey,
    opacity: 1,
  },
  buttonHolder: {
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
  },
});

export default styles;
