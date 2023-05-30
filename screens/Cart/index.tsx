import styles from '@styles/Cart'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Cart = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTxt}>My Cart</Text>
            </View>
        </SafeAreaView>
    )
}

export default Cart