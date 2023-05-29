export enum SCREENS {
    WELCOME = 'Welcome',
    REGISTER = 'Register',
    LOGIN = 'Login',
}

export type NavigationProp = {
    navigate: (screen: SCREENS, isEditMode?: unknown) => void;
    goBack: () => void;
};
