import { getRealPrice } from "@entities/Flower/utils";
import { makeAutoObservable } from "mobx";
import { IBasketItemResponse } from "../api/models";

export class BasketStore {
  basketItems: IBasketItemResponse[];

  constructor(items: IBasketItemResponse[]) {
    this.basketItems = items;

    makeAutoObservable(this);
  }

  deleteItem = (id: IBasketItemResponse["id"]) => {
    this.basketItems = this.basketItems.filter((item) => item.id !== id);
  };

  changeItem = (
    id: IBasketItemResponse["id"],
    value: Partial<IBasketItemResponse>
  ) => {
    const basketItem = this.basketItems.find((item) => item.id === id);

    if (basketItem) {
      Object.assign(basketItem, value);
    }
  };

  get commonPrice(): number {
    return this.basketItems.reduce(
      (accumulator, cur) =>
        accumulator +
        getRealPrice(cur.flower.price, cur.flower.sale) * cur.number,
      0
    );
  }
}
