import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imgContainer: {
    height: 350,
    backgroundColor: COLORS.lightWhite,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 24,
    position: "absolute",
  },
  heading: {
    color: COLORS.lightblack,
    fontFamily: "bold",
    fontSize: 24,
  },
  content: {
    padding: 24,
  },
  quantity: {
    paddingTop: 4,
    color: COLORS.grey,
    fontFamily: "semibold",
    fontSize: 16,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 30,
  },
  productDetailsContainer: {
    paddingVertical: 18,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    rowGap: 10,
  },
  subHeading: {
    color: COLORS.lightblack,
    fontFamily: "semibold",
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    fontFamily: "regular",
    color: COLORS.grey,
    textAlign: "justify",
    lineHeight: 21,
  },
  reviewContainer: {
    paddingTop: 18,
    paddingBottom: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    rowGap: 5,
  },
  main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tagHolder: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  centered: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  containerStyle: {
    paddingBottom: 60,
  },
});

export default styles;
