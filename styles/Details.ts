import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    safeAreaContainer: {
        flex: 1,
        paddingHorizontal: 24,
    },
    contentContainer: {
        paddingBottom: 40,
    },
    heading: {
        color: COLORS.black,
        fontFamily: 'semibold',
        fontSize: 26,
        maxWidth: '80%',
    },
    fields: {
        rowGap: 30,
        paddingVertical: 30,
    },
    alreadyAcct: {
        color: COLORS.black,
        fontFamily: 'semibold',
        fontSize: 14,
        textAlign: 'center',
    },
    signUp: {
        color: COLORS.primary,
    },
});

export default styles;
