import { createContext } from "react";

type UserCartContextType = {
  cartItems: any[];
  setCartItems: (items: any[]) => void;
};

export const UserCartContext = createContext<UserCartContextType>({
  cartItems: [],
  setCartItems: () => {},
});

export default UserCartContext;
