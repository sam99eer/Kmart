import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    marginTop: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
  },
  headerTxt: {
    textAlign: "center",
    color: COLORS.lightblack,
    fontSize: 20,
    fontFamily: "bold",
    paddingBottom: 12,
  },
  icon: {
    position: "absolute",
    left: 0,
  },
});

export default styles;
