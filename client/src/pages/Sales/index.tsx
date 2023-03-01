import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { api } from "@entities/api";
import { FlowerCard } from "@entities/Flower/ui/FlowerCard";
import { IFlowerResponse } from "@entities/Flower/api/models";

function SalesPage() {
  const [flowers, setFlowers] = useState<IFlowerResponse[]>([]);
  const getFlowers = async () => {
    const response = await api.flowers.list({
      params: {
        with_sale: true,
      },
    });

    console.log(response);
    setFlowers(response.data.results || []);
  };

  useEffect(() => {
    getFlowers();
  }, []);

  return (
    <>
      {flowers.map((flower) => (
        <Grid item>
          <FlowerCard key={flower.id} flower={flower} />
        </Grid>
      ))}
    </>
  );
}

export default SalesPage;
