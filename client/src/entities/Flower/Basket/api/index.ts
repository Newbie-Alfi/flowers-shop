import { AxiosRequestConfig } from "axios";
import { auth } from "@api/auth/config";
import { IPagination } from "@api/index";
import { IBasketItemResponse } from "./models";

export const basketApi = () => {
  const list = async (params?: AxiosRequestConfig) =>
    auth.get<IPagination<IBasketItemResponse[]>>("basket", params);

  const getOne = async (
    id: IBasketItemResponse["id"],
    params?: AxiosRequestConfig
  ) => auth.get<IBasketItemResponse>(`"basket"/${id}`, params);

  const add = async (id: IBasketItemResponse["id"]) => {
    const data = new FormData();

    data.set("flower", `${id}`);

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
