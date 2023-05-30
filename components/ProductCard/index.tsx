import { IProduct } from '@models/data/ProductModel'
import { NavigationProp, SCREENS } from '@models/screens'
import { useNavigation } from '@react-navigation/native'
import { cartActions } from '@store/actions'
import styles from '@styles/ProductCard'
import Plus from '@svg/Plus'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

const ProductCard = (props: { data: IProduct }) => {

    const navigation = useNavigation<NavigationProp>();
    const dispatch = useDispatch();

    const addHandler = () => {
        dispatch(cartActions.cartHandler({ action: 'add', data: props.data }));
    }

    const navigateHandler = () => {
        navigation.navigate(SCREENS.PRODUCT_DETAILS, { data: props.data })
    }

    return (
        <Pressable style={styles.container} onPress={navigateHandler}>
            <View style={styles.imgContainer}>
                <Image source={props.data?.image} style={styles.img} />
            </View>
            <Text style={styles.heading}>{props.data?.name}</Text>
            <Text style={styles.qty}>{props.data?.quantityUnit}</Text>
            <View style={styles.addRow}>
                <Text style={styles.price}>₹ {props.data?.price}</Text>
                <Pressable onPress={addHandler} style={({ pressed }) => pressed ? [styles.add, styles.pressed] : styles.add}>
                    <Plus />
                </Pressable>
            </View>
        </Pressable>
    )
}

export default ProductCard