import { makeAutoObservable } from "mobx";
import { IFlowerResponse } from "../api/models";

// TODO: сделать наследование
export class FlowerStore {
  basketItems: IFlowerResponse[];

  constructor(items: IFlowerResponse[]) {
    this.basketItems = items;

    makeAutoObservable(this);
  }

  deleteItem = (id: IFlowerResponse["id"]) => {
    this.basketItems = this.basketItems.filter((item) => item.id !== id);
  };

  changeItem = (id: IFlowerResponse["id"], value: Partial<IFlowerResponse>) => {
    const basketItem = this.basketItems.find((item) => item.id === id);

    if (basketItem) {
      Object.assign(basketItem, value);
    }
  };
}
