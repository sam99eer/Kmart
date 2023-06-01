import { COLORS } from '@constants/Colors'
import styles from '@styles/SearchBox'
import Magnifier from '@svg/Magnifier'
import React from 'react'
import { TextInput, View } from 'react-native'

const SearchBox = (props: { value: string; onChange: (text: string) => void }) => {
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Magnifier />
            </View>
            <TextInput
                value={props.value}
                onChangeText={props.onChange}
                placeholder='Search Store'
                placeholderTextColor={COLORS.grey}
                maxLength={15}
                style={styles.textBox}
            />
        </View>
    )
}

export default SearchBox