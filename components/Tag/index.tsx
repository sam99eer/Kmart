import styles from '@styles/Tag'
import React from 'react'
import { Text, View } from 'react-native'

const Tag = (props: { text: string }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

export default Tag