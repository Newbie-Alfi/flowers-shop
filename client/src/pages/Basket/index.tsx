import { useMemo } from "react";
import { observer } from "mobx-react-lite";
import { Box, Paper, Typography, Button } from "@mui/material";
import { api } from "@entities/api";
import { BasketItemCard } from "@entities/Flower/Basket/ui";
import { BasketContext } from "@entities/Flower/Basket/store/hook";
import { BasketStore } from "@entities/Flower/Basket/store";
import { useApi } from "@api/index";
import { SceletonFlowerCard } from "@entities/Flower/ui/FlowerSceletonCard";

const BasketPage = observer(() => {
  const { value, isLoading } = useApi(api.basket.list);
  const basketStore = useMemo(
    () => new BasketStore(value ? value.data.results : []),
    [value?.data.results]
  );

  return (
    <BasketContext.Provider value={basketStore}>
      <Paper sx={{ p: 2, mt: 4, mb: 4 }}>
        <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
          <Box display="flex" sx={{ flexWrap: "wrap", gap: 3 }}>
            {basketStore.basketItems.map((basketItem) => (
              <BasketItemCard
                key={basketItem.flower.id}
                basketItem={basketItem}
              />
            ))}
            {isLoading &&
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11].map((i) => (
                <SceletonFlowerCard key={i} />
              ))}
          </Box>
        </Box>
      </Paper>
      <Box display="flex" sx={{ mb: 4 }}>
        <Paper sx={{ p: 2, width: 300 }}>
          <Typography sx={{ mb: 2 }} variant="h5">
            Итого: {basketStore.commonPrice}р
          </Typography>
          <Button variant="contained">Заказать</Button>
        </Paper>
      </Box>
    </BasketContext.Provider>
  );
});

export default BasketPage;
