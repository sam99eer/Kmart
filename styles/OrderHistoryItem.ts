import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 8,
    borderRadius: 12,
    backgroundColor: COLORS.lightWhite,
    overflow: "hidden",
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.lightWhite,
  },
  title: {
    color: COLORS.lightblack,
    fontSize: 18,
    fontFamily: "semibold",
    maxWidth: "90%",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
  icon: {
    position: "absolute",
    right: 8,
    top: 7,
  },
  mainContainer: {
    flexDirection: "row",
    columnGap: 14,
    borderWidth: 0.5,
    borderColor: COLORS.lightblack,
    borderRadius: 16,
    marginVertical: 8,
    padding: 8,
  },
  rightCol: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    color: COLORS.lightblack,
    fontFamily: "semibold",
    fontSize: 16,
  },
  price: {
    color: COLORS.lightblack,
    fontFamily: "semibold",
    fontSize: 18,
  },
  subHeading: {
    color: COLORS.grey,
    fontFamily: "regular",
    fontSize: 16,
  },
  img: {
    maxHeight: 80,
    maxWidth: 80,
    resizeMode: "contain",
  },
  imageContainer: {
    height: 85,
    width: 85,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 1,
  },
});

export default styles;
