import UserCartContext from "../UserCartContext";
import { useState } from "react";
import { Shoe } from "app/types";

export const UserCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<any[]>([]);

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
