import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { api } from "@entities/api";
import { BasketItemCard } from "@entities/Flower/Basket/ui";
import { IBasketItemResponse } from "@entities/Flower/Basket/api/models";

function BasketPage() {
  const [basket, setBasket] = useState<IBasketItemResponse[]>([]);
  const getFlowers = async () => {
    const response = await api.basket.list();

    console.log(response);
    setBasket(response.data.results || []);
  };

  useEffect(() => {
    getFlowers();
  }, []);

  return (
    <>
      {basket.map((basketItem) => (
        <Grid item>
          <BasketItemCard key={basketItem.flower.id} basketItem={basketItem} />
        </Grid>
      ))}
    </>
  );
}

export default BasketPage;
