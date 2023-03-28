import { Skeleton, Stack } from "@mui/material";

export function SceletonFlowerCard() {
  return (
    <Stack>
      <Skeleton variant="rounded" width={300} height={300} />
      <Skeleton
        variant="rectangular"
        sx={{ mt: 1.5 }}
        width={270}
        height={50}
      />
      <Skeleton variant="rectangular" sx={{ mt: 1 }} width={100} height={32} />
    </Stack>
  );
}
