import { basketApi } from "./Flower/Basket/api";
import { flowerApi } from "./Flower/api";

export const api = {
  flowers: flowerApi(),
  basket: basketApi(),
};
