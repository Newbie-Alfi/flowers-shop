export interface ISaleResponse {
  name: string;
  number: number | null;
  percent: number | null;
}

export interface IFlowerResponse {
  id: number;
  name: string;
  price: number;
  sale: ISaleResponse | null;
  img: string;
}
