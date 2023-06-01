import { NavigationProp, SCREENS } from '@models/screens'
import { useNavigation } from '@react-navigation/native'
import styles from '@styles/OrderItem'
import RightChevron from '@svg/RightChevron'
import React, { ReactNode } from 'react'
import { Pressable, Text, View } from 'react-native'

const OrderItem = (props: { icon: ReactNode, label: string, screen: SCREENS }) => {

    const navigation = useNavigation<NavigationProp>();

    const navigateHandler = () => {
        navigation.navigate(props.screen);
    }

    return (
        <Pressable
            style={({ pressed }) => pressed ? [styles.container, styles.pressed] : styles.container}
            onPress={navigateHandler}
        >
            <View style={styles.iconContainer}>
                <View style={styles.icon}>{props.icon}</View>
                <Text style={styles.label}>{props.label}</Text>
            </View>
            <RightChevron />
        </Pressable>
    )
}

export default OrderItem