import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
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
});

export default styles;
