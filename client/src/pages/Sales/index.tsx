import { useState } from "react";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { api } from "@entities/api";
import { FlowerCard } from "@entities/Flower/ui/FlowerCard";
import { ToBasketBtn } from "@entities/Flower/Basket/ui/ToBusketBtn";
import { useApi } from "@api/index";
import { Pagination } from "@shared/ui/Pagination/Pagination";
import { SceletonFlowerCard } from "@entities/Flower/ui/FlowerSceletonCard";
// import { LikeBtn } from "@shared/ui/LikeBtn";
import { AuthView } from "@shared/ui/AuthView";

function SalesPage() {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(24);
  const { value, isLoading } = useApi(() =>
    api.flowers.list({
      params: {
        with_sale: true,
      },
    })
  );

  return (
    <Paper sx={{ p: 2, mt: 4, mb: 4 }}>
      <Typography variant="h5">Сегодня</Typography>
      <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
        <Box display="flex" sx={{ flexWrap: "wrap", gap: 3 }}>
          {value?.data.results.map((flower) => (
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
        <Pagination
          sx={{ mt: 2 }}
          page={page}
          onChange={(e, p) => setPage(p)}
          pageSize={pageSize}
          count={value?.data.count}
        />
      </Box>
    </Paper>
  );
}

export default SalesPage;
