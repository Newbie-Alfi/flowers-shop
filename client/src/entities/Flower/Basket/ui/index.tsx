// import { Link, useNavigate } from "react-router-dom";
import {
  Typography,
  // Tooltip,
  CardProps,
  Button,
} from "@mui/material";
import { FlowerCard } from "@entities/Flower/ui/FlowerCard";
import { IBasketItemResponse } from "../api/models";

export interface IFlowerCardProps extends CardProps {
  basketItem: IBasketItemResponse;
}

export function BasketItemCard(props: IFlowerCardProps) {
  const {
    basketItem: { flower, number },
    sx,
  } = props;

  return (
    <FlowerCard sx={sx} flower={flower}>
      {number}
      <Button>Добавить</Button>
    </FlowerCard>
  );
}
