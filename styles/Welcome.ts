import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeAreaContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    heading: {
        color: COLORS.white,
        paddingTop: 36,
        paddingBottom: 20,
        fontFamily: 'semibold',
        fontSize: 48,
        textAlign: 'center',
    },
    subheading: {
        color: COLORS.faded,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'regular',
    },
    btnContainer: {
        width: '90%',
        paddingVertical: 40,
    },
});

export default styles;
