import { createContext, useState } from "react";
import { Shoe } from "app/types";

type UserCartContextType = {
  cartItems: any[];
  setCartItems: (items: any[]) => void;
};

export const UserCartContext = createContext<UserCartContextType>({
  cartItems: [],
  setCartItems: () => {},
});

export default UserCartContext;
