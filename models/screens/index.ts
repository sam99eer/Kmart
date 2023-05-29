export enum SCREENS {
  WELCOME = "Welcome",
  REGISTER = "Register",
  LOGIN = "Login",
  SHOP = "Shop",
  DASHBOARD = "Dashboard",
}

export type NavigationProp = {
  navigate: (screen: SCREENS, isEditMode?: unknown) => void;
  goBack: () => void;
};
