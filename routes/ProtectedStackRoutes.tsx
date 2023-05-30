import { SCREENS } from '@models/screens';
import { ProtectedStackScreens } from '@models/screens/ProtectedStackScreens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProtectedBottomRoutes from '@routes/ProtectedBottomRoutes';
import CategoryData from '@screens/CategoryData';
import ProductDetails from '@screens/ProductDetails';

const Stack = createNativeStackNavigator<ProtectedStackScreens>();

function ProtectedStackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName={SCREENS.DASHBOARD}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={SCREENS.DASHBOARD} component={ProtectedBottomRoutes} />
            <Stack.Screen name={SCREENS.CATEGORY_DATA} component={CategoryData} />
            <Stack.Screen name={SCREENS.PRODUCT_DETAILS} component={ProductDetails} />
        </Stack.Navigator>
    );
}

export default ProtectedStackRoutes;
