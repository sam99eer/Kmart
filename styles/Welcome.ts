import { COLORS } from '@constants/Colors';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width + 1,
    },
    safeAreaContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    heading: {
        color: COLORS.white,
        paddingVertical: 20,
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
