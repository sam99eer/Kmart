import styles from '@styles/Shop';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Shop = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>DashboardShop</Text>
        </SafeAreaView>
    );
};

export default Shop;
