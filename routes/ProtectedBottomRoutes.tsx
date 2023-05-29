import { SCREENS } from '@models/screens';
import { ProtectedBottomScreens } from '@models/screens/ProtectedBottomScreens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Shop from '@screens/Shop';
import React from 'react';

const Tab = createBottomTabNavigator<ProtectedBottomScreens>();


const ProtectedBottomRoutes = () => {
    return (
        <Tab.Navigator initialRouteName={SCREENS.SHOP} screenOptions={{ headerShown: false }}>
            <Tab.Screen name={SCREENS.SHOP} component={Shop} />
        </Tab.Navigator>
    );
};

export default ProtectedBottomRoutes;