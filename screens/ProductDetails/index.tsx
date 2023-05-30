import PrimaryButton from '@components/PrimaryButton';
import QuantityRow from '@components/QuantityRow';
import Tag from '@components/Tag';
import { CartQuantityAction } from '@models/data/CartModel';
import { ProductDetailsDataScreenProps } from '@models/screens/ProtectedStackScreens';
import { cartActions } from '@store/actions';
import { StoreModel } from '@store/store';
import styles from '@styles/ProductDetails';
import Back from '@svg/Back';
import FilledStar from '@svg/FilledStar';
import ShareIcon from '@svg/ShareIcon';
import Star from '@svg/Star';
import React from 'react';
import { Image, Pressable, ScrollView, Share, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetails = ({ navigation, route }: ProductDetailsDataScreenProps) => {

    const data = route.params?.data || {};
    const { top } = useSafeAreaInsets();
    const cartData = useSelector((state: StoreModel) => state.cartReducer.data);
    const dispatch = useDispatch();

    const quantity = cartData?.find(item => item.id === data?.id)?.quantity ?? 0;

    const shareHandler = async () => {
        await Share.share({
            title: data.name,
            message: `Hey, Checkout what I found on KMart. I got ${data?.name} in ₹${data?.price} ${data?.quantityUnit}. You should check it out.`
        });
    }

    const quantityHandler = (action: CartQuantityAction) => {
        dispatch(cartActions.cartHandler({ data, action }))
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.containerStyle} showsVerticalScrollIndicator={false}>
            <View style={[styles.imgContainer, { paddingTop: top }]}>
                <View style={[styles.header, { top: 20 + top }]}>
                    <Pressable onPress={navigation.goBack}>
                        <Back />
                    </Pressable>
                    <Pressable onPress={shareHandler}>
                        <ShareIcon />
                    </Pressable>
                </View>
                <Image source={data?.image} />
            </View>
            <View style={styles.content}>
                <View style={styles.main}>
                    <View>
                        <Text style={styles.heading}>{data?.name}</Text>
                        <Text style={styles.quantity}>{data?.quantityUnit}</Text>
                    </View>
                    <View style={styles.tagHolder}>
                        {data?.isBestSelling ? <Tag text='Best Selling' /> : null}
                        {data?.isExclusive ? <Tag text='Exclusive' /> : null}
                    </View>
                </View>
                <View style={styles.priceRow}>
                    <QuantityRow
                        quantity={quantity}
                        onAdd={quantityHandler.bind(this, "add")}
                        onRemove={quantityHandler.bind(this, "remove")}
                        bordered
                    />
                    <Text style={styles.heading}>₹{data?.price}</Text>
                </View>
                <View style={styles.productDetailsContainer}>
                    <Text style={styles.subHeading}>Product Details</Text>
                    <Text style={styles.description}>{data?.description}</Text>
                </View>
                <View style={styles.reviewContainer}>
                    <Text style={styles.subHeading}>Ratings</Text>
                    <View style={styles.starContainer}>
                        {Array.from(new Array(5), (_, index) => index < data?.rating ? <FilledStar key={`filledStar_${index}`} /> : <Star key={`star_${index}`} />)}
                    </View>
                </View>
                <View style={styles.centered}>
                    {quantity > 0 ? <QuantityRow
                        quantity={quantity}
                        onAdd={quantityHandler.bind(this, "add")}
                        onRemove={quantityHandler.bind(this, "remove")}
                        bordered
                    /> : <PrimaryButton text='Add To Basket' onPress={quantityHandler.bind(this, "add")} />}
                </View>
            </View>
        </ScrollView>
    )
}

export default ProductDetails