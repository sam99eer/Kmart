import { COLORS } from '@constants/Colors';
import styles from '@styles/SecondaryButton';
import React from 'react';
import { ActivityIndicator, Pressable, Text } from 'react-native';

const SecondaryButton = (props: {
    text: string;
    onPress: () => void;
    isLoading?: boolean;
    colView?: boolean
}) => {

    const btnStyles = !!props?.colView ? [styles.container, styles.fl1] : styles.container

    return (
        <Pressable
            onPress={!!props.isLoading ? null : props.onPress}
            style={({ pressed }) =>
                pressed ? [btnStyles, styles.pressedBtn] : btnStyles
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
