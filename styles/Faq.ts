import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingHorizontal: 24,
  },
  list: {
    paddingTop: 10,
    rowGap: 16,
    paddingBottom: 60,
  },
  txt: {
    color: COLORS.lightblack,
    fontSize: 16,
    fontFamily: "semibold",
    textAlign: "justify",
    lineHeight: 20,
  },
});

export default styles;
