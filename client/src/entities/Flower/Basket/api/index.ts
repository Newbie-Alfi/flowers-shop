import { AxiosRequestConfig } from "axios";
import { auth } from "@shared/api/auth/config";
import { IBasketItemResponse } from "./models";

export const basketApi = () => {
  const list = async (params?: AxiosRequestConfig) =>
    auth.get<IBasketItemResponse[]>("basket", params);

  const getOne = async (
    id: IBasketItemResponse["id"],
    params?: AxiosRequestConfig
  ) => auth.get<IBasketItemResponse>(`"basket"/${id}`, params);

  const add = async (id: IBasketItemResponse["id"]) => {
    const data = new FormData();

    data.set("flower_id", `${id}`);

    await auth.post("basket/", data);
  };

  const updateFields = async (
    id: IBasketItemResponse["id"],
    data: FormData
  ) => {
    const controller = new AbortController();

    await auth.patch(`basket/${id}/`, data, {
      signal: controller.signal,
    });

    controller.abort();
  };

  const deleteItem = async (id: IBasketItemResponse["id"]) => {
    await auth.delete(`basket/${id}/`);
  };

  return { list, getOne, add, updateFields, deleteItem };
};
