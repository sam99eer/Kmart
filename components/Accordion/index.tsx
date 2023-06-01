import styles from '@styles/Accordion';
import RightChevron from '@svg/RightChevron';
import React, { useRef, useState } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';

const Accordion = (props: { title: string, body: string }) => {

    const [visible, setVisible] = useState(false);

    const animationController = useRef(new Animated.Value(0)).current;

    const toggleListItem = () => {
        const config = {
            duration: 200,
            toValue: visible ? 0 : 1,
            useNativeDriver: true,
        };

        Animated.timing(animationController, config).start();
        setVisible(oldState => !oldState);
    };

    const arrowTransform = animationController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg']
    });

    const heightTransform = animationController.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    return (
        <View style={styles.container}>
            <Pressable onPress={toggleListItem} style={({ pressed }) => pressed ? [styles.titleContainer, { opacity: 0.6 }] : styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Animated.View style={[styles.icon, { transform: [{ rotateZ: arrowTransform }] }]}>
                    <RightChevron />
                </Animated.View>
            </Pressable>

            {visible && <Animated.View style={{ transform: [{ scaleY: heightTransform }] }}>
                <Text style={styles.txt}>{props.body}</Text>
            </Animated.View>}

        </View>
    );
};

export default Accordion;