import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'relative',
    },
    textBox: {
        color: COLORS.black,
        fontSize: 18,
        fontFamily: 'medium',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    label: {
        color: COLORS.grey,
        fontFamily: 'semibold',
        fontSize: 16,
    },
});

export default styles;
