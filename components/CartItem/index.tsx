import QuantityRow from '@components/QuantityRow'
import { CartQuantityAction, ICart } from '@models/data/CartModel'
import { cartActions } from '@store/actions'
import styles from '@styles/CartItem'
import Close from '@svg/Close'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

const CartItem = (props: { data: ICart }) => {

    const dispatch = useDispatch();

    const quantityHandler = (action: CartQuantityAction) => {
        dispatch(cartActions.cartHandler({ data: props.data, action }))
    }

    const removeHandler = () => {
        dispatch(cartActions.removeItem({ id: props.data?.id }))
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={props.data?.image} style={styles.image} />
            </View>
            <View style={styles.rightCol}>
                <View style={styles.topRow}>
                    <View>
                        <Text style={styles.heading}>{props.data?.name}</Text>
                        <Text>{props.data?.quantityUnit}</Text>
                    </View>
                    <Pressable onPress={removeHandler}>
                        <Close />
                    </Pressable>
                </View>
                <View style={styles.row}>
                    <QuantityRow
                        quantity={props.data?.quantity}
                        onAdd={quantityHandler.bind(this, "add")}
                        onRemove={quantityHandler.bind(this, "remove")}
                    />
                    <Text style={styles.price}>₹{props.data?.price * props.data?.quantity}</Text>
                </View>
            </View>
        </View>
    )
}

export default CartItem