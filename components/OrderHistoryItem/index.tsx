import { convert24To12 } from '@constants/Helpers';
import { IOrderHistory } from '@models/data/OrderHistory';
import styles from '@styles/OrderHistoryItem';
import RightChevron from '@svg/RightChevron';
import React, { useRef, useState } from 'react';
import { Animated, Image, Pressable, Text, View } from 'react-native';

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

    return (
        <View style={styles.container}>
            <Pressable onPress={toggleListItem} style={({ pressed }) => pressed ? [styles.titleContainer, { opacity: 0.6 }] : styles.titleContainer}>
                <Text style={styles.title}>{props.data?.order_id}</Text>
                <Animated.View style={[styles.icon, { transform: [{ rotateZ: arrowTransform }] }]}>
                    <RightChevron />
                </Animated.View>
            </Pressable>

            {visible && <Animated.View style={{ transform: [{ scaleY: heightTransform }] }}>
                {props.data?.items?.map((item, index) => <View key={`orderitem_${item.id}_${index}`} style={styles.mainContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={item?.image} style={styles.img} />
                    </View>
                    <View style={styles.detailsContainer}>
                        <View style={styles.rightCol}>
                            <View>
                                <Text style={styles.heading}>{item?.name}</Text>
                                <Text style={styles.subHeading}>{item?.quantityUnit}</Text>
                                <Text style={styles.subHeading}>Quantity - {item.quantity}</Text>
                            </View>
                            <Text style={styles.price}>₹{item?.price * item?.quantity}</Text>
                        </View>
                    </View>
                </View>)}
                <View>
                    <Text style={styles.subHeading}>Order Date - {props.data.date}</Text>
                    <Text style={styles.subHeading}>Order Time - {convert24To12(props.data.time)}</Text>
                    <Text style={styles.heading}>Total Cost - ₹{props.data.total_cost}</Text>
                </View>
            </Animated.View>}

        </View>
    );
};

export default OrderHistoryItem;