import type { StackScreenProps } from "@react-navigation/stack";

import { PAGE } from "./enums";

export type RootStackParamList = {
  [PAGE.ADMIN_HOME]: undefined;
  [PAGE.ADD]: { itemId: string } | undefined;
  [PAGE.LOGIN]: undefined;
  [PAGE.USER_HOME]: undefined;
  [PAGE.USER_CART]: undefined;
};

export type AdminHomeScreenNavigationProp = StackScreenProps<
  RootStackParamList,
  PAGE.ADMIN_HOME
>;

export type AddScreenNavigationProp = StackScreenProps<
  RootStackParamList,
  PAGE.ADD
>;

export type LoginScreenNavigationProp = StackScreenProps<
  RootStackParamList,
  PAGE.LOGIN
>;

export type UserHomeScreenNavigationProp = StackScreenProps<
  RootStackParamList,
  PAGE.USER_HOME
>;

export type UserCartScreenNavigationProp = StackScreenProps<
  RootStackParamList,
  PAGE.USER_CART
>;
