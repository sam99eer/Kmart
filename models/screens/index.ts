export enum SCREENS {
  WELCOME = "Welcome",
  REGISTER = "Register",
  LOGIN = "Login",
  SHOP = "Shop",
  DASHBOARD = "Dashboard",
  CATEGORY_DATA = "CategoryData",
}

export type NavigationProp = {
  navigate: (screen: SCREENS, isEditMode?: unknown) => void;
  goBack: () => void;
};
