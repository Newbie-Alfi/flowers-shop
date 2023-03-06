import React, { useContext } from "react";
import { BasketStore } from ".";

export const BasketContext = React.createContext<BasketStore | undefined>(
  undefined
);

export const useBasketStore = () => {
  const basketStore = useContext(BasketContext);

  if (!basketStore) throw new Error("BasketStore doesn't initialized");

  return basketStore;
};
