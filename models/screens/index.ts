export enum SCREENS {
    WELCOME = 'Welcome',
    DETAILS = 'Details',
}

export type NavigationProp = {
    navigate: (screen: SCREENS, isEditMode?: unknown) => void;
    goBack: () => void;
};
