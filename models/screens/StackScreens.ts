import { SCREENS } from '@models/screens';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type StackScreens = {
    [SCREENS.WELCOME]: undefined;
    [SCREENS.REGISTER]: undefined;
    [SCREENS.LOGIN]: undefined;
};

export type WelcomeScreenProps = NativeStackScreenProps<
    StackScreens,
    SCREENS.WELCOME
>;

export type RegisterScreenProps = NativeStackScreenProps<
    StackScreens,
    SCREENS.REGISTER
>;

export type LoginScreenProps = NativeStackScreenProps<
    StackScreens,
    SCREENS.LOGIN
>;

export { StackScreens };
