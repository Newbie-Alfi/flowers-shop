import { useTheme } from "@emotion/react";
import { ISaleResponse } from "@entities/Sale/api/models";
import { Box, BoxProps, Paper } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";
import "./style.scss";

interface ISaleCardProps extends Omit<BoxProps, "component" | "alt" | "src"> {
  sale: ISaleResponse;
}

export function SaleCard(props: ISaleCardProps) {
  const { sale, sx } = props;
  const theme = useTheme();
  const saleContent = (() => {
    if (sale?.number) return `-${sale.number}р`;
    if (sale?.percent) return `-${sale.percent}%`;

    return undefined;
  })();

  return (
    // to override the priority in mui :(
    <Paper sx={{ cursor: "pointer" }}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          {...props}
          component="img"
          className="sale-card__img"
          sx={{
            borderRadius: 2,
            width: 280,
            height: 140,
            border: `${theme.palette?.primary["900"]} solid 2px`,
            ...sx,
          }}
          alt={sale.name}
          src={sale.img}
        />
        <Box
          sx={{
            border: `${theme.palette?.primary["400"]} solid 2px`,
          }}
          className="sale-card__text-container"
        >
          <Typography className="sale-card__text" variant="button">
            {sale.name}
          </Typography>
          <Typography
            className="sale-card__text"
            sx={{ сolor: "white" }}
            variant="h6"
          >
            {saleContent}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
