import { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import { api } from "@entities/api";
import { FlowerCard } from "@entities/Flower/ui/FlowerCard";
import { IFlowerResponse } from "@entities/Flower/api/models";
import { ToBasketBtn } from "@entities/Flower/Basket/ui/ToBusketBtn";

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

  return (
    <Box sx={{ mt: 8, p: 2 }} display="flex" justifyContent="center">
      <Grid container rowSpacing={6} spacing={4} lg={10} xl={8}>
        {flowers.map((flower) => (
          <Grid item>
            <FlowerCard key={flower.id} flower={flower}>
              <ToBasketBtn flower={flower} />
            </FlowerCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MainPage;
