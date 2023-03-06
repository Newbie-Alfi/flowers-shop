import { CardProps, Button, Typography, Box, Input } from "@mui/material";
import { useMemo } from "react";
import { useReducer } from "react";

export interface ICounterProps extends CardProps {
  number: number;
  min?: number;
  max?: number;
  onChange?(value: number): any;
}

// TODO: set normal config
/* eslint-ignore */
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
      <Button onClick={decrement}>-</Button>
      <Typography sx={{ p: 1 }} variant="h6">
        {num}
      </Typography>
      <Button onClick={increment}>+</Button>
    </Box>
  );
}
