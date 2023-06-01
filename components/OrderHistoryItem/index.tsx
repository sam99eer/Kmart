import { IOrderHistory } from '@models/data/OrderHistory';
import styles from '@styles/OrderHistoryItem';
import RightChevron from '@svg/RightChevron';
import React, { useRef, useState } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';

const OrderHistoryItem = (props: { data: IOrderHistory }) => {

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

    const splittedOrderId = props.data?.order_id?.split("_")?.at(-1);
    const orderDate = `${new Date(+splittedOrderId!).getDate()}-${new Date(+splittedOrderId!).getMonth() + 1}-${new Date(+splittedOrderId!).getFullYear()}`

    return (
        <View style={styles.container}>
            <Pressable onPress={toggleListItem} style={({ pressed }) => pressed ? [styles.titleContainer, { opacity: 0.6 }] : styles.titleContainer}>
                <Text style={styles.title}>{props.data?.order_id}{'\t\t'}{orderDate}</Text>
                <Animated.View style={[styles.icon, { transform: [{ rotateZ: arrowTransform }] }]}>
                    <RightChevron />
                </Animated.View>
            </Pressable>

            {visible && <Animated.View style={{ transform: [{ scaleY: heightTransform }] }}>
            </Animated.View>}

        </View>
    );
};

export default OrderHistoryItem;