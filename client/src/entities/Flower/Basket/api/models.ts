import { IFlowerResponse } from "@entities/Flower/api/models";

export interface IBasketItemResponse {
  flower: IFlowerResponse;
  number: number;
}
