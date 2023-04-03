// import { Typography, Box, Paper, BoxProps } from "@mui/material";
import { Typography, Box, Paper } from "@mui/material";
import { api } from "@entities/api";
import { useApi } from "@shared/api";
import { SaleCard } from "../SaleCard";

import "./style.scss";

// export function SaleList(props: Omit<BoxProps, "children">) {
export function SaleList() {
  const { value } = useApi(api.sales.list);
  const hasData = value?.data.results && value?.data.results.length > 0;

  return (
    <Box>
      {hasData && (
        <Paper sx={{ p: 2 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Скидки
          </Typography>

          <div className="salelist-con">
            {value?.data.results.map((sale) => (
              <SaleCard
                sale={sale}
                key={sale.id}
                sx={{
                  height: 140,
                }}
              />
            ))}
          </div>
        </Paper>
      )}
    </Box>
  );
}
