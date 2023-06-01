import Header from '@components/Header'
import { StoreModel } from '@store/store'
import styles from '@styles/Order'
import EmptyOrderHistory from '@svg/EmptyOrderHistory'
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

const Orders = () => {

    const orders = useSelector((state: StoreModel) => state.orderHistoryReducer.data);

    return (
        <SafeAreaView style={styles.container}>
            <Header title='Orders' />
            <FlatList
                data={orders || []}
                renderItem={() => <></>}
                ListEmptyComponent={<View style={styles.emptyContainer}>
                    <EmptyOrderHistory />
                    <Text style={styles.emptyHeaderTxt}>No Order History Found!</Text>
                    <Text style={styles.subHeading}>Please order something</Text>
                </View>}
            />
        </SafeAreaView>
    )
}

export default Orders