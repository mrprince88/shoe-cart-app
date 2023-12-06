import { SIZE } from "./enums";

export type Shoe = {
  name: string;
  price: string;
  description: string;
  sizes: SIZE[];
  id: string;
};

export type CartItem = {
  name: string;
  price: string;
  description: string;
  size: SIZE[];
  id: string;
  cartItemId: string;
};
