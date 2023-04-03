import { Grid, Paper, Typography } from "@mui/material";
import { useRoute } from "@pages/routes";

export function Footer() {
  const { toAbout } = useRoute();

  return (
    <Paper sx={{ p: 2 }}>
      <Grid container spacing={4} sx={{ width: 300 }}>
        <Grid item sm={6}>
          <Typography onClick={toAbout} variant="body2">
            О компании
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography onClick={toAbout} variant="body2">
            Наши магазины
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography onClick={toAbout} variant="body2">
            Как сделать заказ
          </Typography>
        </Grid>
        <Grid onClick={toAbout} item sm={6}>
          <Typography variant="body2">Способы оплаты</Typography>
        </Grid>
        <Grid onClick={toAbout} item sm={6}>
          <Typography variant="body2">Мы в соцсетях</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
