import { PRODUCTS } from '@data/Products'
import { ICategoryData } from '@models/data/CategoryDataModel'
import { NavigationProp, SCREENS } from '@models/screens'
import { useNavigation } from '@react-navigation/native'
import styles from '@styles/CategoryCard'
import React from 'react'
import { Image, Pressable, Text } from 'react-native'

const CategoryCard = (props: { data: ICategoryData }) => {

    const navigation = useNavigation<NavigationProp>();

    const navigateHandler = () => {
        const data = PRODUCTS.filter(item => item.category === props.data?.type);
        navigation.navigate(SCREENS.CATEGORY_DATA, { data, headerText: props.data?.name })
    }

    return (
        <Pressable onPress={navigateHandler} style={[styles.container, { backgroundColor: props.data?.bgColor, borderColor: props.data?.borderColor }]}>
            <Image source={props.data?.img} style={styles.img} />
            <Text style={styles.txt}>{props.data?.name}</Text>
        </Pressable>
    )
}

export default CategoryCard