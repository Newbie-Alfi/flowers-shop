import { Button, Typography, Box, Tooltip } from "@mui/material";
import { useMemo, useReducer } from "react";

export interface ICounterProps {
  number: number;
  min?: number;
  max?: number;
  // TODO:
  onChange?(value: number): any;
}

// TODO: set normal config
/* eslint-disable */
enum ICounterActions {
  "INCREMENT",
  "DECREMENT",
}

export function Counter(props: ICounterProps) {
  const { number, min, max, onChange } = props;

  function reducer(state: number, action: ICounterActions) {
    switch (action) {
      case ICounterActions.DECREMENT:
        if (min !== undefined && state <= min) return state;

        return state - 1;
      case ICounterActions.INCREMENT:
        if (max !== undefined && state >= max) return state;

        return state + 1;
      default:
        return state;
    }
  }

  const [num, dispatch] = useReducer(reducer, number);

  const increment = () => dispatch(ICounterActions.INCREMENT);
  const decrement = () => dispatch(ICounterActions.DECREMENT);

  useMemo(() => {
    if (onChange) onChange(num);
  }, [num]);

  return (
    <Box display="flex" alignItems="center">
      <Button
        variant="outlined"
        size="small"
        style={{ minWidth: "24px", width: "24px" }}
        sx={{ p: 0, m: 0 }}
        onClick={decrement}
      >
        -
      </Button>
      {
        // TODO: компонент вынесен, но при этом текст тултипа только для конкретной страницы
      }
      <Tooltip title="Количество товара" placement="top" arrow>
        <Typography sx={{ mr: 1, ml: 1 }} variant="subtitle1">
          {num}
        </Typography>
      </Tooltip>
      <Button
        variant="outlined"
        size="small"
        style={{ minWidth: "24px", width: "24px" }}
        sx={{ p: 0, m: 0 }}
        onClick={increment}
      >
        +
      </Button>
    </Box>
  );
}
