import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  textBox: {
    backgroundColor: COLORS.lightWhite,
    borderRadius: 15,
    color: COLORS.lightblack,
    paddingHorizontal: 16,
    paddingVertical: 8,
    paddingLeft: 44,
    fontSize: 14,
    fontFamily: "semibold",
    flex: 1,
  },
  icon: {
    position: "absolute",
    zIndex: 1,
    left: 16,
  },
});

export default styles;
