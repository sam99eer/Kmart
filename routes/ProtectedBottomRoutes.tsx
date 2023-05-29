import { COLORS } from '@constants/Colors';
import { SCREENS } from '@models/screens';
import { ProtectedBottomScreens } from '@models/screens/ProtectedBottomScreens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Shop from '@screens/Shop';
import styles from '@styles/BottomBar';
import InactiveShopIcon from '@svg/InactiveShopIcon';
import ShopIcon from '@svg/ShopIcon';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator<ProtectedBottomScreens>();


const ProtectedBottomRoutes = () => {
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
            </Tab.Navigator>
            <SafeAreaView edges={['bottom']} style={styles.bottomSafeArea} />
        </>
    );
};

export default ProtectedBottomRoutes;