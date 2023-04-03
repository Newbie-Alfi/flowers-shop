import { Box, Typography } from "@mui/material";

interface IKeyValueContainerProps {
  name: string;
  value: string;
}

export function KeyValueContainer(props: IKeyValueContainerProps) {
  const { name, value } = props;

  return (
    <Box sx={{ mb: 1 }}>
      <Typography variant="caption">{name}:</Typography>
      <Typography variant="h6">{value}</Typography>
    </Box>
  );
}
