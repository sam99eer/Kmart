import { NavigationProp } from '@models/screens'
import { useNavigation } from '@react-navigation/native'
import styles from '@styles/Header'
import Back from '@svg/Back'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const Header = (props: { title: string }) => {

    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={styles.header}>
            <Pressable style={styles.icon} onPress={navigation.goBack}>
                <Back />
            </Pressable>
            <Text style={styles.headerTxt}>{props.title}</Text>
        </View>
    )
}

export default Header