import { Link } from "react-router-dom";
// TODO: Импорт в верхних уровней
import { ROUTE } from "@pages/routes";
import { Grid, Paper, Typography } from "@mui/material";

export function Footer() {
  return (
    <Paper sx={{ p: 2 }}>
      <Grid container spacing={4} sx={{ width: 300 }}>
        <Grid item sm={6}>
          <Link to={ROUTE.ABOUT}>
            <Typography variant="body2">О компании</Typography>
          </Link>
        </Grid>
        <Grid item sm={6}>
          <Link to={ROUTE.ABOUT}>
            <Typography variant="body2">Наши магазины</Typography>
          </Link>
        </Grid>
        <Grid item sm={6}>
          <Link to={ROUTE.ABOUT}>
            <Typography variant="body2">Как сделать</Typography>
            заказ
          </Link>
        </Grid>
        <Grid item sm={6}>
          <Link to={ROUTE.ABOUT}>
            <Typography variant="body2">Способы оплаты</Typography>
          </Link>
        </Grid>
        <Grid item sm={6}>
          <Link to={ROUTE.ABOUT}>
            <Typography variant="body2">Мы в соцсетях</Typography>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
}
