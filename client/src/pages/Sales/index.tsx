import { Grid, Box } from "@mui/material";
import { api } from "@entities/api";
import { FlowerCard } from "@entities/Flower/ui/FlowerCard";
import { ToBasketBtn } from "@entities/Flower/Basket/ui/ToBusketBtn";
import { useApi } from "@api/index";

function SalesPage() {
  const { value } = useApi(() =>
    api.flowers.list({
      params: {
        with_sale: true,
      },
    })
  );

  return (
    <Box
      sx={{ mt: 8, p: 2, width: "100%" }}
      display="flex"
      justifyContent="center"
    >
      <Grid container rowSpacing={6} spacing={4} lg={10} xl={8}>
        {value?.data.results.map((flower) => (
          <Grid item key={flower.id}>
            <FlowerCard flower={flower}>
              <ToBasketBtn flower={flower} />
            </FlowerCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SalesPage;
