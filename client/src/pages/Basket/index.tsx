import { useMemo } from "react";
import { observer } from "mobx-react-lite";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { api } from "@entities/api";
import { BasketItemCard } from "@entities/Flower/Basket/ui";
import { BasketContext } from "@entities/Flower/Basket/store/hook";
import { BasketStore } from "@entities/Flower/Basket/store";
import { useApi } from "@api/index";

const BasketPage = observer(() => {
  const { value } = useApi(api.basket.list);
  const basketStore = useMemo(
    () => new BasketStore(value ? value.data.results : []),
    [value?.data.results]
  );

  return (
    <BasketContext.Provider value={basketStore}>
      <Box
        sx={{ mt: 8, p: 2, width: "100%" }}
        display="flex"
        justifyContent="center"
      >
        <Grid container spacing={4} md={11}>
          <Grid item lg={12} xl={8}>
            <Grid container rowSpacing={6} spacing={4}>
              {basketStore.basketItems.map((basketItem) => (
                <Grid item key={basketItem.flower.id}>
                  <BasketItemCard width="100%" basketItem={basketItem} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={8} md={3} lg={5} xl={3}>
            <Paper sx={{ p: 2, minWidth: 100 }}>
              <Typography sx={{ mb: 2 }} variant="h5">
                Итого: {basketStore.commonPrice}р
              </Typography>
              <Button variant="contained">Заказать</Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </BasketContext.Provider>
  );
});

export default BasketPage;
