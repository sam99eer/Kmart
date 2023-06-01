import { COLORS } from '@constants/Colors';
import styles from '@styles/SecondaryButton';
import React from 'react';
import { ActivityIndicator, Pressable, Text } from 'react-native';

const SecondaryButton = (props: {
    text: string;
    onPress: () => void;
    isLoading?: boolean;
}) => {
    return (
        <Pressable
            onPress={!!props.isLoading ? null : props.onPress}
            style={({ pressed }) =>
                pressed ? [styles.container, styles.pressedBtn] : styles.container
            }
        >
            {!!props.isLoading ? (
                <ActivityIndicator color={COLORS.primary} />
            ) : (
                <Text style={styles.text}>{props.text}</Text>
            )}
        </Pressable>
    );
};

export default SecondaryButton;
