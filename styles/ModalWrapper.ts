import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backdrop,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99,
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
});

export default styles;
