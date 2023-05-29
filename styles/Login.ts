import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        paddingHorizontal: 24
    },
    carrotHolder: {
        alignItems: 'center',
        paddingVertical: 60,
    },
    heading: {
        color: COLORS.black,
        fontFamily: 'semibold',
        fontSize: 26,
    },
    fields: {
        rowGap: 60,
        paddingVertical: 30,
    },
    alreadyAcct: {
        color: COLORS.black,
        fontFamily: 'semibold',
        fontSize: 14,
        textAlign: 'center',
    },
    signIn: {
        color: COLORS.primary,
    },
});

export default styles;
