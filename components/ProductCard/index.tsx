import { IProduct } from '@models/data/ProductModel'
import styles from '@styles/ProductCard'
import Plus from '@svg/Plus'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

const ProductCard = (props: { data: IProduct }) => {
    return (
        <Pressable style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={props.data?.image} style={styles.img} />
            </View>
            <Text style={styles.heading}>{props.data?.name}</Text>
            <Text style={styles.qty}>{props.data?.quantityUnit}</Text>
            <View style={styles.addRow}>
                <Text style={styles.price}>₹ {props.data?.price}</Text>
                <Pressable style={({ pressed }) => pressed ? [styles.add, styles.pressed] : styles.add}>
                    <Plus />
                </Pressable>
            </View>
        </Pressable>
    )
}

export default ProductCard