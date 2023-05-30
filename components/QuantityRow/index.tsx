import styles from '@styles/QuantityRow'
import ActiveAdd from '@svg/ActiveAdd'
import ActiveMinus from '@svg/ActiveMinus'
import Add from '@svg/Add'
import Minus from '@svg/Minus'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const QuantityRow = (props: { quantity: number; onAdd: () => void; onRemove: () => void; bordered?: boolean }) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.btn} onPress={props.quantity <= 0 ? null : props.onRemove}>
                {props.quantity <= 0 ? <Minus /> : <ActiveMinus />}
            </Pressable>
            <View style={!!props?.bordered ? [styles.quantityBox, styles.bordered] : styles.quantityBox}>
                <Text style={styles.text}>{props.quantity}</Text>
            </View>
            <Pressable style={styles.btn} onPress={props.quantity >= 9 ? null : props.onAdd}>
                {props.quantity >= 9 ? <Add /> : <ActiveAdd />}
            </Pressable>
        </View>
    )
}

export default QuantityRow