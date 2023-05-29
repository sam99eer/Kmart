import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        width: "100%",
        paddingVertical: 24,
        borderRadius: 18,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    text: {
        color: COLORS.white,
        textAlign: "center",
        fontSize: 18,
        fontFamily: "semibold",
    },
    pressedBtn: {
        opacity: 0.8,
    },
    errorContainer: {
        backgroundColor: COLORS.danger,
    },
});

export default styles;
