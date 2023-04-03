import { IconButton, Tooltip, Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import DeleteIcon from "@mui/icons-material/Delete";
import { FlowerCard, IFlowerCardProps } from "@entities/Flower/ui/FlowerCard";
import { Counter } from "@shared/ui/Counter";
import { api } from "@entities/api";
import { IBasketItemResponse } from "../api/models";
import { useBasketStore } from "../store/hook";

export interface IBasketItemCardProps {
  width?: IFlowerCardProps["width"];
  basketItem: IBasketItemResponse;
}

export const BasketItemCard = observer((props: IBasketItemCardProps) => {
  const {
    width = 300,
    basketItem: { flower, number, id },
  } = props;

  const basketStore = useBasketStore();

  const update = async (value: number) => {
    try {
      const data = new FormData();

      data.set("number", `${value}`);

      await api.basket.updateFields(id, data);

      basketStore.changeItem(id, { number: value });
      // TODO:
    } catch (e) {}
  };

  const deleteItem = async () => {
    try {
      await api.basket.deleteItem(id);

      basketStore.deleteItem(id);
      // TODO:
    } catch (e) {}
  };

  return (
    <FlowerCard width={width} flower={flower}>
      <Box display="flex" justifyContent="space-between">
        <Counter onChange={update} number={number} min={1} />
        <Tooltip title="Удалить" placement="top" arrow>
          <IconButton onClick={deleteItem} aria-label="delete">
            <DeleteIcon color="error" />
          </IconButton>
        </Tooltip>
      </Box>
    </FlowerCard>
  );
});
