import { ISaleResponse } from "@entities/Sale/api/models";

export interface IImageResponse {
  id: number;
  img: string;
}

export interface ICategoryResponse {
  id: number;
  name: string;
}

export interface IFlowerResponse {
  id: number;
  name: string;
  images: IImageResponse[];
  price: number;
  sale: ISaleResponse | null;
  сategories: ICategoryResponse[];
  is_in_basket: boolean;
  is_in_wishlist: boolean;
}
