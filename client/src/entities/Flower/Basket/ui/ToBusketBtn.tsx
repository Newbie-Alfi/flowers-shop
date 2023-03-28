import { api } from "@entities/api";
import { IFlowerResponse } from "@entities/Flower/api/models";
import { Button } from "@mui/material";

interface IToBasketBtnProps {
  flower: IFlowerResponse;
}

export function ToBasketBtn(props: IToBasketBtnProps) {
  const { flower } = props;

  const addFlowerToBasket = async (id: number) => {
    await api.basket.add(id);
  };

  return (
    <Button
      size="small"
      variant="outlined"
      onClick={() => addFlowerToBasket(flower.id)}
      disabled={flower.is_in_basket}
    >
      {flower.is_in_basket ? "Уже в корзине" : "В корзину"}
    </Button>
  );
}
