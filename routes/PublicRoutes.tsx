import { SCREENS } from '@models/screens';
import { StackScreens } from '@models/screens/StackScreens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@screens/Login';
import Register from '@screens/Register';
import Welcome from '@screens/Welcome';

const Stack = createNativeStackNavigator<StackScreens>();

function PublicRoutes() {
    return (
        <Stack.Navigator
            initialRouteName={SCREENS.WELCOME}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={SCREENS.WELCOME} component={Welcome} />
            <Stack.Screen name={SCREENS.REGISTER} component={Register} />
            <Stack.Screen name={SCREENS.LOGIN} component={Login} />
        </Stack.Navigator>
    );
}

export default PublicRoutes;
