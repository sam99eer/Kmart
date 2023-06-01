import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
  },
  header: {
    paddingVertical: 12,
  },
  headerTxt: {
    textAlign: "center",
    color: COLORS.lightblack,
    fontSize: 20,
    fontFamily: "bold",
  },
  list: {
    rowGap: 15,
    paddingTop: 20,
  },
  column: {
    justifyContent: "space-between",
  },
  emptyContainer: {
    alignItems: "center",
  },
  subHeading: {
    fontFamily: "regular",
    fontSize: 14,
    color: COLORS.grey,
  },
});

export default styles;
