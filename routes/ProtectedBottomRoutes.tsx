import { COLORS } from '@constants/Colors';
import { SCREENS } from '@models/screens';
import { ProtectedBottomScreens } from '@models/screens/ProtectedBottomScreens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '@screens/Cart';
import Shop from '@screens/Shop';
import { StoreModel } from '@store/store';
import styles from '@styles/BottomBar';
import CartIcon from '@svg/CartIcon';
import InactiveCartIcon from '@svg/InactiveCartIcon';
import InactiveShopIcon from '@svg/InactiveShopIcon';
import ShopIcon from '@svg/ShopIcon';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator<ProtectedBottomScreens>();


const ProtectedBottomRoutes = () => {

    const cartItems = useSelector((state: StoreModel) => state.cartReducer.data);

    return (
        <>
            <Tab.Navigator initialRouteName={SCREENS.SHOP} screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.lightblack,
                tabBarLabelStyle: styles.label,
                tabBarStyle: styles.tabBar
            }}
            >
                <Tab.Screen
                    name={SCREENS.SHOP}
                    component={Shop}
                    options={{
                        tabBarIcon: ({ focused }) => focused ? <ShopIcon /> : <InactiveShopIcon />,
                    }}
                />
                <Tab.Screen
                    name={SCREENS.CART}
                    component={Cart}
                    options={{
                        tabBarIcon: ({ focused }) => focused ? <CartIcon /> : <InactiveCartIcon />,
                        tabBarBadge: cartItems.length ?? 0,
                        tabBarBadgeStyle: !!cartItems.length ? styles.badge : styles.hide
                    }}
                />
            </Tab.Navigator>
            <SafeAreaView edges={['bottom']} style={styles.bottomSafeArea} />
        </>
    );
};

export default ProtectedBottomRoutes;