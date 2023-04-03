import { Grid, Box } from "@mui/material";
import { api } from "@entities/api";
import { FlowerCard } from "@entities/Flower/ui/FlowerCard";
import { ToBasketBtn } from "@entities/Flower/Basket/ui/ToBusketBtn";
import { useApi } from "@api/hooks";
import { Pagination } from "@shared/ui/Pagination/Pagination";
import { useMemo, useState } from "react";
import { SceletonFlowerCard } from "@entities/Flower/ui/FlowerSceletonCard";
// import { LikeBtn } from "@shared/ui/LikeBtn";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useFlowerStore } from "@entities/Flower/store/hook";
import { observer } from "mobx-react-lite";
import { AuthView } from "@shared/ui/AuthView";

// TODO
export const ProductList = observer(() => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(24);
  const productStore = useFlowerStore();
  const { value, isLoading } = useApi(
    () =>
      api.flowers.list({
        params: {
          page,
          page_size: pageSize,
        },
      }),
    [page, pageSize]
  );

  useMemo(() => {
    productStore.basketItems = value?.data.results || [];
  }, [value]);

  return (
    <Paper sx={{ p: 2, mt: 4, mb: 4 }}>
      <Typography variant="h5">
        {productStore.basketItems.length > 0
          ? "Нашли для вас"
          : "Ничего не найдено"}
      </Typography>
      <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
        <Box display="flex" sx={{ flexWrap: "wrap", gap: 3 }}>
          {productStore.basketItems.map((flower) => (
            <FlowerCard key={flower.id} flower={flower}>
              <AuthView>
                {/* <LikeBtn isActive={flower.is_in_wishlist} onClick={() => {}} /> */}
                <ToBasketBtn flower={flower} />
              </AuthView>
            </FlowerCard>
          ))}
          {isLoading &&
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11].map(() => (
              <Grid item>
                <SceletonFlowerCard />
              </Grid>
            ))}
        </Box>
      </Box>
      <Pagination
        sx={{ mt: 2 }}
        page={page}
        onChange={(e, p) => setPage(p)}
        pageSize={pageSize}
        count={value?.data.count}
      />
    </Paper>
  );
});
