import { AxiosRequestConfig } from "axios";
import { auth } from "@shared/api/auth/config";
import { IFlowerResponse } from "./models";

export const flowerApi = () => {
  const list = (params?: AxiosRequestConfig) =>
    auth.get<IFlowerResponse[]>("flowers", params);

  const getOne = (name: string, params?: AxiosRequestConfig) =>
    auth.get<IFlowerResponse>(name, params);

  return { list, getOne };
};
