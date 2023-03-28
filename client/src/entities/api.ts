import { basketApi } from "./Flower/Basket/api";
import { flowerApi } from "./Flower/api";
import { saleApi } from "./Sale/api";

export const api = {
  flowers: flowerApi(),
  basket: basketApi(),
  sales: saleApi(),
};
