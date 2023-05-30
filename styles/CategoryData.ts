import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  headerText: {
    color: COLORS.lightblack,
    fontSize: 20,
    fontFamily: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 12,
  },
  contentContainer: {
    rowGap: 15,
    paddingHorizontal: 14,
    paddingBottom: 60,
    paddingTop: 24,
  },
  columnContainer: {
    justifyContent: "space-between",
  },
  backBtn: {
    position: "absolute",
    left: 24,
  },
});

export default styles;
