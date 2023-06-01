import { COLORS } from '@constants/Colors';
import styles from '@styles/PrimaryButton';
import React from 'react';
import { ActivityIndicator, Pressable, Text } from 'react-native';

const PrimaryButton = (props: {
    text: string;
    onPress: () => void;
    isLoading?: boolean;
    error?: boolean;
    colView?: boolean;
}) => {
    const customStyle = !!props?.error
        ? !!props?.colView ? [styles.container, styles.errorContainer, styles.fl1] : [styles.container, styles.errorContainer]
        : !!props.colView ? [styles.container, styles.fl1] : styles.container;

    return (
        <Pressable
            onPress={!!props.isLoading ? null : props.onPress}
            style={({ pressed }) =>
                pressed ? [customStyle, styles.pressedBtn] : customStyle
            }
        >
            {!!props.isLoading ? (
                <ActivityIndicator color={COLORS.white} />
            ) : (
                <Text style={styles.text}>{props.text}</Text>
            )}
        </Pressable>
    );
};

export default PrimaryButton;
