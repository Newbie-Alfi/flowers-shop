import { basketApi } from "./Flower/Basket/api";
import { flowerApi } from "./Flower/api";
import { saleApi } from "./Sale/api";
import { buyerApi } from "./Buyer/api";
import { paymentApi } from "./Payment/api";

export const api = {
  flowers: flowerApi(),
  basket: basketApi(),
  sales: saleApi(),
  buyers: buyerApi(),
  payment: paymentApi(),
};
