export enum SCREENS {
    WELCOME = 'Welcome',
}

export type NavigationProp = {
    navigate: (screen: SCREENS, isEditMode?: unknown) => void;
    goBack: () => void;
};
