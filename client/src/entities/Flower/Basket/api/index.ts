import { AxiosRequestConfig } from "axios";
import { auth } from "@shared/api/auth/config";
import { IBasketItemResponse } from "./models";

export const basketApi = () => {
  const list = (params?: AxiosRequestConfig) =>
    auth.get<IBasketItemResponse[]>("basket", params);

  const getOne = (name: string, params?: AxiosRequestConfig) =>
    auth.get<IBasketItemResponse>(`"basket"/${name}`, params);

  const add = (id: number) => auth.post("basket/", id);

  return { list, getOne, add };
};
