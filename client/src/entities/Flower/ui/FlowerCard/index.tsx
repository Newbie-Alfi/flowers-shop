import { IFlowerResponse } from "@entities/Flower/api/models";
import { Typography, CardProps, Box, Badge } from "@mui/material";
import { BACKEND_URL } from "@shared/api/config";
import { getRealPrice } from "../../utils";

export interface IFlowerCardProps extends CardProps {
  flower: IFlowerResponse;
  children?: React.ReactNode;
  width?: number | string;
}

export function FlowerCard(props: IFlowerCardProps) {
  const {
    flower: { name, img, price, sale },
    children,
    width = 300,
  } = props;

  const saleContent = (() => {
    if (sale?.number) return `-${sale.number}р`;
    if (sale?.percent) return `-${sale.percent}%`;

    return undefined;
  })();

  // TODO: I think u r understand why is on the todo
  const image = img.includes(BACKEND_URL) ? img : BACKEND_URL + img;

  return (
    <Box>
      <Box>
        <Badge
          badgeContent={saleContent && <Typography>{saleContent}</Typography>}
          color="error"
        >
          <img
            style={{
              width,
              height: 300,
              borderRadius: 7,
              objectFit: "cover",
            }}
            alt={name}
            src={image}
          />
        </Badge>
      </Box>

      <Box sx={{ pt: 1 }}>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" sx={{ pr: 2 }}>
            {getRealPrice(price, sale)}р
          </Typography>
          {saleContent && (
            <Typography color="GrayText" variant="subtitle2">
              <del>{price}р</del>
            </Typography>
          )}
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="caption">{name}</Typography>
        </Box>

        {children}
      </Box>
    </Box>
  );
}
