import ProductCard from '@components/ProductCard';
import { getRandomIntegerArray } from '@constants/Helpers';
import { BEST_SELLING_PRODUCTS, EXCLUSIVE_PRODUCTS } from '@data/FlatlistData';
import { PRODUCTS } from '@data/Products';
import { IProduct } from '@models/data/ProductModel';
import { SCREENS } from '@models/screens';
import { ShopScreenProps } from '@models/screens/ProtectedBottomScreens';
import { useScrollToTop } from '@react-navigation/native';
import styles from '@styles/Shop';
import SmallRedCarrot from '@svg/SmallRedCarrot';
import React, { useMemo, useRef } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Shop = ({ navigation }: ShopScreenProps) => {

    const scrollRef = useRef(null);

    useScrollToTop(scrollRef);

    const randomNumbers = useMemo(() => getRandomIntegerArray(PRODUCTS.length, 10), []);
    const TODAY_PICK_DATA = useMemo(() => PRODUCTS.filter((_, index) => randomNumbers.includes(index)), []);

    const navigateHandler = (data: IProduct[], headerText: string) => {
        navigation.navigate(SCREENS.CATEGORY_DATA, { data, headerText })
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer} ref={scrollRef}>
                <View style={styles.header}>
                    <SmallRedCarrot />
                    <Text style={styles.name}>KMart</Text>
                </View>
                <View style={styles.headingRow}>
                    <Text style={styles.heading}>Exclusive Offers</Text>
                    <Text onPress={navigateHandler.bind(this, EXCLUSIVE_PRODUCTS, 'Exclusive Offers')} style={styles.seeAll}>See all</Text>
                </View>
                <FlatList
                    horizontal
                    data={EXCLUSIVE_PRODUCTS?.slice(0, 5)}
                    keyExtractor={(item) => `exclusive_${item.id}`}
                    renderItem={({ item }) => <ProductCard data={item} />}
                    contentContainerStyle={styles.cardHolder}
                    showsHorizontalScrollIndicator={false}
                />
                <View style={styles.headingRow}>
                    <Text style={styles.heading}>Best Selling</Text>
                    <Text onPress={navigateHandler.bind(this, BEST_SELLING_PRODUCTS, 'Best Selling')} style={styles.seeAll}>See all</Text>
                </View>
                <FlatList
                    horizontal
                    data={BEST_SELLING_PRODUCTS?.reverse()?.slice(0, 5)}
                    keyExtractor={(item) => `bestselling_${item.id}`}
                    renderItem={({ item }) => <ProductCard data={item} />}
                    contentContainerStyle={styles.cardHolder}
                    showsHorizontalScrollIndicator={false}
                />
                <View style={styles.headingRow}>
                    <Text style={styles.heading}>Today's Picks for you</Text>
                    <Text onPress={navigateHandler.bind(this, TODAY_PICK_DATA, "Today's Picks for you")} style={styles.seeAll}>See all</Text>
                </View>
                <FlatList
                    horizontal
                    data={TODAY_PICK_DATA?.slice(0, 5)}
                    keyExtractor={(item) => `todayPick_${item.id}`}
                    renderItem={({ item }) => <ProductCard data={item} />}
                    contentContainerStyle={styles.cardHolder}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Shop;
