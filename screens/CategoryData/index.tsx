import ProductCard from '@components/ProductCard'
import { CategoryDataScreenProps } from '@models/screens/ProtectedStackScreens'
import styles from '@styles/CategoryData'
import Back from '@svg/Back'
import React from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const CategoryData = ({ navigation, route }: CategoryDataScreenProps) => {

    const data = route.params?.data || [];
    const header = route.params?.headerText;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.backBtn} onPress={navigation.goBack}>
                    <Back />
                </Pressable>
                <Text style={styles.headerText}>{header}</Text>
            </View>
            <FlatList
                data={data}
                numColumns={2}
                keyExtractor={(item) => `${header}_${item.id}`}
                renderItem={({ item }) => <ProductCard data={item} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                columnWrapperStyle={styles.columnContainer}
            />
        </SafeAreaView>
    )
}

export default CategoryData