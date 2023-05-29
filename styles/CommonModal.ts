import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderRadius: 18,
        padding: 26,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        width: '90%',
    },
    heading: {
        color: COLORS.lightblack,
        paddingTop: 50,
        paddingBottom: 20,
        fontSize: 28,
        fontFamily: 'semibold',
        textAlign: 'center',
    },
    text: {
        color: COLORS.grey,
        fontFamily: 'regular',
        fontSize: 16,
        textAlign: 'center',
    },
    btnContainer: {
        paddingTop: 40,
        width: '100%',
    },
});

export default styles;
