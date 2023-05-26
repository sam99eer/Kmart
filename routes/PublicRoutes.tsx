import { SCREENS } from '@models/screens';
import { StackScreens } from '@models/screens/StackScreens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from '@screens/Details';
import Welcome from '@screens/Welcome';

const Stack = createNativeStackNavigator<StackScreens>();

function PublicRoutes() {
    return (
        <Stack.Navigator
            initialRouteName={SCREENS.WELCOME}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={SCREENS.WELCOME} component={Welcome} />
            <Stack.Screen name={SCREENS.DETAILS} component={Details} />
        </Stack.Navigator>
    );
}

export default PublicRoutes;
