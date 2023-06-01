import styles from '@styles/OrderItem'
import RightChevron from '@svg/RightChevron'
import React, { ReactNode } from 'react'
import { Pressable, Text, View } from 'react-native'

const OrderItem = (props: { icon: ReactNode, label: string, }) => {
    return (
        <Pressable style={({ pressed }) => pressed ? [styles.container, styles.pressed] : styles.container}>
            <View style={styles.iconContainer}>
                <View style={styles.icon}>{props.icon}</View>
                <Text style={styles.label}>{props.label}</Text>
            </View>
            <RightChevron />
        </Pressable>
    )
}

export default OrderItem