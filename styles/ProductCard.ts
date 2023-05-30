import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
    width: 170,
    borderRadius: 18,
  },
  add: {
    padding: 14,
    backgroundColor: COLORS.primary,
    borderRadius: 17,
  },
  addRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
  },
  heading: {
    fontSize: 16,
    fontFamily: "bold",
    color: COLORS.lightblack,
    maxWidth: 170,
  },
  price: {
    color: COLORS.lightblack,
    fontSize: 18,
    fontFamily: "semibold",
  },
  qty: {
    color: COLORS.grey,
    fontFamily: "regular",
    fontSize: 14,
  },
  imgContainer: {
    alignItems: "center",
    paddingBottom: 24,
  },
  img: {
    height: 100,
    width: 100,
    resizeMode: "contain",
    aspectRatio: 3 / 2,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.85 }],
  },
});

export default styles;
