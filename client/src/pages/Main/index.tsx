import { Grid, Box } from "@mui/material";
import { api } from "@entities/api";
import { FlowerCard } from "@entities/Flower/ui/FlowerCard";
import { ToBasketBtn } from "@entities/Flower/Basket/ui/ToBusketBtn";
import { useApi } from "@api/hooks";
import { Pagination } from "@shared/ui/Pagination/Pagination";
import { Map } from "@shared/ui/Map";
import { useState } from "react";

function MainPage() {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(24);
  const { value } = useApi(
    () =>
      api.flowers.list({
        params: {
          page,
          page_size: pageSize,
        },
      }),
    [page, pageSize]
  );

  return (
    <>
      <Box
        sx={{ mt: 8, p: 2, mb: 4 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Grid container rowSpacing={6} spacing={4} lg={10} xl={8}>
          {value?.data.results.map((flower) => (
            <Grid item>
              <FlowerCard key={flower.id} flower={flower}>
                <ToBasketBtn flower={flower} />
              </FlowerCard>
            </Grid>
          ))}
        </Grid>
        <Pagination
          sx={{ mt: 2 }}
          page={page}
          onChange={(e, p) => setPage(p)}
          pageSize={pageSize}
          count={value?.data.count}
        />
      </Box>
      <Map />
    </>
  );
}

export default MainPage;
