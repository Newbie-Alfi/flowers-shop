import { useMemo } from "react";
import { observer } from "mobx-react-lite";
import { Box, Paper, Typography, Button, Tooltip } from "@mui/material";
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

  const onOrder = async () => {
    try {
      const products: number[] = [];

      basketStore.basketItems.forEach((product) =>
        products.push(product.flower.id)
      );

      const response = await api.payment.order({
        product_ids: products,
        redirect_url: window.location.href,
      });

      // TODO:
      /* eslint-disable */
      // @ts-ignore
      window.location = response.data.confirmation.confirmation_url;
    } catch (error) {}
  };

  return (
    <BasketContext.Provider value={basketStore}>
      <Box sx={{ mb: 4 }}>
        <Paper sx={{ p: 2, mt: 4, mb: 2 }}>
          <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
            <Box display="flex" sx={{ flexWrap: "wrap", gap: 3 }}>
              {basketStore.basketItems.length < 1 && (
                <Box>
                  <Typography sx={{ mb: 2 }} variant="h6">
                    В корзине пока пусто
                  </Typography>
                  <Typography sx={{ mb: 2 }} variant="subtitle2">
                    Загляните на главную, чтобы выбрать товары или найдите
                    нужное в поиске
                  </Typography>
                </Box>
              )}
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
        <Box sx={{ display: "flex", gap: 2, alignItems: "start" }}>
          {basketStore.basketItems.length > 0 && (
            <Box display="flex" sx={{ mb: 4 }}>
              <Paper sx={{ p: 2, width: 300 }}>
                <Typography sx={{ mb: 2 }} variant="h5">
                  Итого: {basketStore.commonPrice.toFixed(2)}р
                </Typography>
                <Tooltip
                  arrow
                  placement="right"
                  title="При нажатии на эту кнопку вы будете перенаправлены на страницу оплаты."
                >
                  <Button variant="contained" onClick={onOrder}>
                    Заказать
                  </Button>
                </Tooltip>
              </Paper>
            </Box>
          )}
        </Box>
      </Box>
    </BasketContext.Provider>
  );
});

export default BasketPage;
