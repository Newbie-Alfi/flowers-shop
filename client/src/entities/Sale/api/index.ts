import { AxiosRequestConfig } from "axios";
import { auth } from "@shared/api/auth/config";
import { IPagination } from "@api/types";
import { ISaleResponse } from "./models";

export const saleApi = () => {
  const list = (params?: AxiosRequestConfig) =>
    auth.get<IPagination<ISaleResponse[]>>("sales", params);

  const getOne = (name: string, params?: AxiosRequestConfig) =>
    auth.get<ISaleResponse>(name, params);

  return { list, getOne };
};
