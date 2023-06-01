import { COLORS } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        backgroundColor: COLORS.tag,
        padding: 4,
    },
    text: {
        color: COLORS.grey,
        fontSize: 9,
        fontFamily: 'semibold'
    }
})

export default styles;