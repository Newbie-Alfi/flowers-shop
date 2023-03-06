import { IFlowerResponse } from "@entities/Flower/api/models";

export interface IBasketItemResponse {
  id: number;
  flower: IFlowerResponse;
  number: number;
}
