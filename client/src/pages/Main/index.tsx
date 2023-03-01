import { useEffect, useState } from "react";
import { Grid, Button } from "@mui/material";
import { api } from "@entities/api";
import { FlowerCard } from "@entities/Flower/ui/FlowerCard";
import { IFlowerResponse } from "@entities/Flower/api/models";

function MainPage() {
  const [flowers, setFlowers] = useState<IFlowerResponse[]>([]);

  const getFlowers = async () => {
    const response = await api.flowers.list();

    console.log(response);
    setFlowers(response.data.results || []);
  };

  useEffect(() => {
    getFlowers();
  }, []);

  const addFlowerToBasket = async (id: number) => {
    await api.basket.add(id);
  };

  return (
    <>
      {flowers.map((flower) => (
        <Grid item>
          <FlowerCard key={flower.id} flower={flower}>
            <Button onClick={() => addFlowerToBasket(flower.id)}>
              В корзину
            </Button>
          </FlowerCard>
        </Grid>
      ))}
    </>
  );
}

export default MainPage;
