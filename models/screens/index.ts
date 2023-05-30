export enum SCREENS {
  WELCOME = "Welcome",
  REGISTER = "Register",
  LOGIN = "Login",
  SHOP = "Shop",
  DASHBOARD = "Dashboard",
  CATEGORY_DATA = "CategoryData",
  PRODUCT_DETAILS = "ProductDetails",
  CART = "Cart",
}

export type NavigationProp = {
  navigate: (screen: SCREENS, params?: unknown) => void;
  goBack: () => void;
};
