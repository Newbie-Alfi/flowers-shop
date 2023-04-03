import { AxiosRequestConfig } from "axios";
import { auth } from "@shared/api/auth/config";
import { IBuyerResponse } from "./models";

export const buyerApi = () => {
  const getOne = (name: string, params?: AxiosRequestConfig) =>
    auth.get<IBuyerResponse>(`buyer/`, params);

  return { getOne };
};
