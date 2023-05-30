import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 8,
    paddingVertical: 8,
  },
  name: {
    fontSize: 18,
    fontFamily: "semibold",
    color: COLORS.grey,
  },
  cardHolder: {
    columnGap: 15,
    paddingHorizontal: 24,
  },
  headingRow: {
    paddingTop: 40,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  heading: {
    color: COLORS.lightblack,
    fontFamily: "semibold",
    fontSize: 24,
  },
  seeAll: {
    color: COLORS.primary,
    fontFamily: "semibold",
    fontSize: 16,
  },
  contentContainer: {
    paddingBottom: 60,
  },
});

export default styles;
