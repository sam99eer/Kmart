import CartItem from '@components/CartItem'
import ErrorModal from '@components/ErrorModal'
import PrimaryButton from '@components/PrimaryButton'
import SuccessModal from '@components/SuccessModal'
import { COLORS } from '@constants/Colors'
import { IOrderHistory } from '@models/data/OrderHistory'
import { ISuccessError } from '@models/data/SuccessErrorModel'
import { SCREENS } from '@models/screens'
import { CartScreenProps } from '@models/screens/ProtectedBottomScreens'
import { cartActions, orderHistoryActions } from '@store/actions'
import { StoreModel } from '@store/store'
import styles from '@styles/Cart'
import EmptyCart from '@svg/EmptyCart'
import * as SecureStore from "expo-secure-store"
import React, { useMemo, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import RazorpayCheckout from 'react-native-razorpay'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'

const Cart = ({ navigation }: CartScreenProps) => {
    const cartData = useSelector((state: StoreModel) => state.cartReducer.data);
    const personalDetails = useSelector((state: StoreModel) => state.personalDetailsReducer);
    const orders = useSelector((state: StoreModel) => state.orderHistoryReducer.data);
    const dispatch = useDispatch();

    const totalPrice = useMemo(() => cartData.reduce((acc, curVal) => acc + (curVal?.price * curVal?.quantity), 0), [cartData]);
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState<ISuccessError>({
        error: {
            btnText: '',
            heading: '',
            isVisible: false,
            msg: ''
        },
        success: {
            btnText: '',
            heading: '',
            isVisible: false,
            msg: ''
        }
    })

    const paymentHandler = () => {
        setLoading(true);
        const options = {
            description: 'KMart Cart Checkout',
            key: 'rzp_test_xWxohjiErGeIgV',
            // rzp_test_xWxohjiErGeIgV      rzp_test_KLMZ1TUbPozBzN
            image: 'https://i.ibb.co/3dT7Pnx/veggie-basket.png',
            currency: 'INR',
            amount: totalPrice * 100,
            name: 'KMart',
            prefill: {
                contact: personalDetails.phone,
                name: personalDetails.name
            },
            theme: { color: COLORS.primary }
        }

        RazorpayCheckout.open(options as any).then(async (data) => {
            const orderItem: IOrderHistory = {
                order_id: 'order_' + Date.now(),
                items: cartData
            };
            const updatedData: IOrderHistory[] = [...orders, orderItem]
            await SecureStore.setItemAsync("orderHistory", JSON.stringify(updatedData));
            dispatch(orderHistoryActions.addItem({ data: orderItem }));
            setModal(oldState => ({
                ...oldState,
                success: {
                    btnText: 'Shop More',
                    heading: 'Success!',
                    isVisible: true,
                    msg: `Your payment is successful and order has been placed. Your Order ID is ${data?.razorpay_order_id} and Payment ID is ${data?.razorpay_payment_id}.`
                }
            }))
        }).catch((error) => {
            setModal(oldState => ({
                ...oldState,
                error: {
                    btnText: 'Retry',
                    heading: 'Something went wrong!',
                    isVisible: true,
                    msg: !!error?.description ? error?.description : "Unable to process payment this time. Please try again later."
                }
            }))
        }).finally(() => setLoading(false))
    }

    const successHandler = () => {
        dispatch(cartActions.clearCart());
        navigation.navigate(SCREENS.SHOP);
    }

    const closeErrorModalHandler = () => {
        setModal(oldState => ({
            ...oldState,
            error: {
                btnText: '',
                heading: '',
                isVisible: false,
                msg: ''
            }
        }))
    }

    return (
        <>
            {modal.success.isVisible ? <SuccessModal
                btnText={modal.success.btnText}
                heading={modal.success.heading}
                text={modal.success.msg}
                onSuccess={successHandler}
            /> : null}
            {modal.error.isVisible ? <ErrorModal
                btnText={modal.error.btnText}
                heading={modal.error.heading}
                text={modal.error.msg}
                onClose={closeErrorModalHandler}
            /> : null}
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTxt}>My Cart</Text>
                </View>
                <FlatList
                    data={cartData || []}
                    keyExtractor={item => `cart_${item.id}`}
                    renderItem={({ item }) => <CartItem data={item} />}
                    contentContainerStyle={styles.list}
                    ListEmptyComponent={<View style={styles.emptyContainer}>
                        <EmptyCart />
                        <View style={styles.pv16}>
                            <Text style={styles.headerTxt}>Cart is Empty!</Text>
                            <Text style={styles.subHeading}>Please add some items</Text>
                        </View>
                    </View>}
                />
                {cartData?.length > 0 ? <View style={styles.buttonContainer}>
                    <View style={styles.btnHolder}>
                        <PrimaryButton text='Go to Checkout' onPress={paymentHandler} isLoading={loading} />
                        <Text style={styles.tag}>{`₹${totalPrice}`}</Text>
                    </View>
                </View> : null}
            </SafeAreaView>
        </>
    )
}

export default Cart