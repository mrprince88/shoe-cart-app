import UserCartContext from "../UserCartContext";
import { useState } from "react";
import { Shoe } from "app/types";

export const UserCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const setCartItemsHandler = (item: Shoe) => {
    // if this shoe is already in the cart, add 1 to the quantity
    const newCartItems = [...cartItems];
    const index = newCartItems.findIndex((i) => i.id === item.id);

    if (index !== -1) {
      newCartItems[index].quantity += 1;
    } else {
      newCartItems.push({ ...item, quantity: 1 });
    }
  };

  return (
    <UserCartContext.Provider
      value={{
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </UserCartContext.Provider>
  );
};

export default UserCartProvider;
