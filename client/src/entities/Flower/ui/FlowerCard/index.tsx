import { IFlowerResponse } from "@entities/Flower/api/models";
import {
  Typography,
  CardContent,
  CardMedia,
  Card,
  CardProps,
  CardActionArea,
} from "@mui/material";
import { BACKEND_URL } from "@shared/api/config";
import { getRealPrice } from "../../utils";

export interface IFlowerCardProps extends CardProps {
  flower: IFlowerResponse;
  children?: React.ReactNode;
}

export function FlowerCard(props: IFlowerCardProps) {
  const {
    flower: { name, img, price, sale },
    children,
    sx,
  } = props;

  const saleContent = (() => {
    if (sale?.number) return `-${sale.number}р`;
    if (sale?.percent) return `-${sale.percent}%`;

    return undefined;
  })();

  // TODO: I think u r understand why is on the todo
  const image = img.includes(BACKEND_URL) ? img : BACKEND_URL + img;

  return (
    <Card {...props} sx={{ ...sx, border: "none" }}>
      <CardActionArea>
        <CardMedia
          sx={{ width: 300, height: 300 }}
          component="img"
          image={image}
          alt={name}
        />
      </CardActionArea>
      <CardContent sx={{ p: "10px", pt: 0 }}>
        <Typography variant="subtitle1">{name}</Typography>
        <Typography variant="body1">
          Цена: {getRealPrice(price, sale)}
        </Typography>
        {saleContent && <Typography>{saleContent}</Typography>}
        {children}
      </CardContent>
    </Card>
  );
}
