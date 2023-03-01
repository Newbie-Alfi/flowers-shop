import { ISaleResponse } from "./api/models";

export function getRealPrice(
  price: number,
  sale?: ISaleResponse | null
): number {
  if (sale?.number) return price - sale.number;
  if (sale?.percent) return price - (price * sale.percent) / 100;

  return price;
}
