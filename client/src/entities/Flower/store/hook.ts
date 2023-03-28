import { useContext, createContext } from "react";
import { FlowerStore } from ".";

export const FlowerContext = createContext<FlowerStore | undefined>(undefined);

export const useFlowerStore = () => {
  const basketStore = useContext(FlowerContext);

  if (!basketStore) throw new Error("BasketStore doesn't initialized");

  return basketStore;
};
