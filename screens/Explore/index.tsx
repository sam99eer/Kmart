import CategoryCard from '@components/CategoryCard'
import ProductCard from '@components/ProductCard'
import SearchBox from '@components/SearchBox'
import { CATEGORY_DATA } from '@data/Categories'
import { PRODUCTS } from '@data/Products'
import styles from '@styles/Explore'
import EmptySearch from '@svg/EmptySearch'
import React, { useMemo, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

const Explore = () => {

    const { bottom } = useSafeAreaInsets();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = useMemo(() => searchTerm.trim().length > 0 ? PRODUCTS.filter(item => item.name?.toLowerCase()?.includes(searchTerm.toLowerCase())) : [], [searchTerm])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTxt}>Find Products</Text>
                <SearchBox
                    value={searchTerm}
                    onChange={setSearchTerm}
                />
                {searchTerm.trim().length > 0 ? <FlatList
                    data={filteredData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ProductCard data={item} />}
                    ListEmptyComponent={<View style={styles.emptyContainer}>
                        <EmptySearch />
                        <Text style={styles.headerTxt}>No items found!</Text>
                        <Text style={styles.subHeading}>Please try broadening your search</Text>
                    </View>}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    contentContainerStyle={[styles.list, { paddingBottom: 120 + bottom }]}
                    columnWrapperStyle={styles.column}
                    keyboardShouldPersistTaps='handled'
                /> : <FlatList
                    data={CATEGORY_DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <CategoryCard data={item} />}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    contentContainerStyle={[styles.list, { paddingBottom: 120 + bottom }]}
                    columnWrapperStyle={styles.column}
                    keyboardShouldPersistTaps='handled'
                />}

            </View>
        </SafeAreaView>
    )
}

export default Explore