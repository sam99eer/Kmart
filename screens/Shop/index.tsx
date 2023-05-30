import ProductCard from '@components/ProductCard';
import { getRandomIntegerArray } from '@constants/Helpers';
import { BEST_SELLING_PRODUCTS, EXCLUSIVE_PRODUCTS } from '@data/FlatlistData';
import { PRODUCTS } from '@data/Products';
import styles from '@styles/Shop';
import SmallRedCarrot from '@svg/SmallRedCarrot';
import React, { useMemo } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Shop = () => {

    const randomNumbers = useMemo(() => getRandomIntegerArray(PRODUCTS.length, 10), []);
    const TODAY_PICK_DATA = useMemo(() => PRODUCTS.filter((_, index) => randomNumbers.includes(index)), []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
                <View style={styles.header}>
                    <SmallRedCarrot />
                    <Text style={styles.name}>KMart</Text>
                </View>
                <View style={styles.headingRow}>
                    <Text style={styles.heading}>Exclusive Offer</Text>
                    <Text style={styles.seeAll}>See all</Text>
                </View>
                <FlatList
                    horizontal
                    data={EXCLUSIVE_PRODUCTS}
                    keyExtractor={(item) => `exclusive_${item.id}`}
                    renderItem={({ item }) => <ProductCard data={item} />}
                    contentContainerStyle={styles.cardHolder}
                    showsHorizontalScrollIndicator={false}
                />
                <View style={styles.headingRow}>
                    <Text style={styles.heading}>Best Selling</Text>
                    <Text style={styles.seeAll}>See all</Text>
                </View>
                <FlatList
                    horizontal
                    data={BEST_SELLING_PRODUCTS}
                    keyExtractor={(item) => `bestselling_${item.id}`}
                    renderItem={({ item }) => <ProductCard data={item} />}
                    contentContainerStyle={styles.cardHolder}
                    showsHorizontalScrollIndicator={false}
                />
                <View style={styles.headingRow}>
                    <Text style={styles.heading}>Today's Picks for you</Text>
                    <Text style={styles.seeAll}>See all</Text>
                </View>
                <FlatList
                    horizontal
                    data={TODAY_PICK_DATA}
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
