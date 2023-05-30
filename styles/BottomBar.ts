import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontFamily: "semibold",
    marginTop: -5,
  },
  tabBar: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 60,
    paddingBottom: 10,
    backgroundColor: COLORS.white,
  },
  bottomSafeArea: {
    backgroundColor: COLORS.white,
  },
  badge: {
    backgroundColor: COLORS.primary,
    fontFamily: "semibold",
    color: COLORS.white,
    position: "absolute",
    top: 2,
    left: 5,
    height: 18,
    width: 18,
  },
  hide: {
    display: "none",
  },
});

export default styles;
