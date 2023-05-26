import styles from '@styles/PrimaryButton';
import React from 'react';
import { Pressable, Text } from 'react-native';

const PrimaryButton = (props: { text: string; onPress: () => void }) => {
    return (
        <Pressable
            onPress={props.onPress}
            style={({ pressed }) =>
                pressed
                    ? [styles.container, styles.pressedBtn]
                    : styles.container
            }
        >
            <Text style={styles.text}>{props.text}</Text>
        </Pressable>
    );
};

export default PrimaryButton;
