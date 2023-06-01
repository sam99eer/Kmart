import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightWhite,
    width: "100%",
    paddingVertical: 24,
    borderRadius: 18,
  },
  text: {
    color: COLORS.primary,
    textAlign: "center",
    fontSize: 18,
    fontFamily: "semibold",
  },
  pressedBtn: {
    opacity: 0.8,
  },
});

export default styles;
