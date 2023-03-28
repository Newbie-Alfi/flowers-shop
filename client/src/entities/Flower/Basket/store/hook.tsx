import { useContext, createContext } from "react";
import { BasketStore } from ".";

export const BasketContext = createContext<BasketStore | undefined>(undefined);

export const useBasketStore = () => {
  const basketStore = useContext(BasketContext);

  if (!basketStore) throw new Error("BasketStore doesn't initialized");

  return basketStore;
};
