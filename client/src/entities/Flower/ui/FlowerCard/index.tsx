import { IFlowerResponse } from "@entities/Flower/api/models";
// import { Link, useNavigate } from "react-router-dom";
import {
  Typography,
  CardContent,
  // Tooltip,
  CardMedia,
  // Box,
  Card,
  CardProps,
  CardActionArea,
  // Accordion,
  // AccordionSummary,
  // AccordionDetails,
} from "@mui/material";
import { BACKEND_URL } from "@shared/api/config";
import { getRealPrice } from "../../utils";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import moment from "moment";
// import map from "../assets/images/map.png";

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

  // TODO: AHHAHAHAHAHAHHAHAHAH КОСТЫЛЬ АХАХХАХАХАХАХ
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

/*
  Added to basket
  Change number of flowers
  Order flower
  Filter flowers
  Auth-store
*/
