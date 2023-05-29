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
});

export default styles;
