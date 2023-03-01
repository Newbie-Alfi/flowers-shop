import { styled, useTheme } from "@mui/material/styles";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Link, Outlet } from "react-router-dom";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Box,
  Grid,
  Typography,
  Button,
} from "@mui/material";
// TODO: НЕЛЬЗЯ ИМПОРТИРОВАТЬ С ВЕРХНИХ УРОВНЕЙ ПО ЭТОЙ АРХИТЕКТУРЕ, НО Я СПЕШУ
import { ROUTE } from "@pages/routes";
import { authApi } from "@shared/api/auth";
import { observer } from "mobx-react-lite";
import { authStore } from "@shared/stores/authStore";

const Main = styled("main")<{
  open?: boolean;
}>(({ theme, open }) => ({}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

// interface INavbarProps {
//   //   children: React.ReactNode;
// }

const AppBar = styled(MuiAppBar, {})<AppBarProps>(({ theme, open }) => ({}));

export const Navbar = observer(() => (
  <Box sx={{ display: "flex" }}>
    <AppBar>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box>
          <Link to={ROUTE.ABOUT}>
            <Typography color="white" sx={{ mr: 1 }} variant="button">
              О нас
            </Typography>
          </Link>
          <Link to={ROUTE.MAIN}>
            <Typography color="white" sx={{ mr: 1 }} variant="button">
              Каталог
            </Typography>
          </Link>
          <Link to={ROUTE.SALES}>
            <Typography color="white" sx={{ mr: 1 }} variant="button">
              Акции
            </Typography>
          </Link>
          {authStore.isAuthicated && (
            <Link to={ROUTE.BASKET}>
              <Typography color="white" sx={{ mr: 1 }} variant="button">
                Корзина
              </Typography>
            </Link>
          )}
        </Box>
        <Box>
          {authStore.isAuthicated ? (
            <Button
              variant="outlined"
              sx={{ mr: 8, color: "white" }}
              onClick={() => {
                authStore.isAuthicated = false;
              }}
            >
              Выход
            </Button>
          ) : (
            <>
              <Link to={ROUTE.SIGN_IN}>
                <Typography color="white" sx={{ mr: 1 }} variant="button">
                  Вход
                </Typography>
              </Link>
              <Link to={ROUTE.SIGN_UP}>
                <Typography color="white" sx={{ mr: 8 }} variant="button">
                  Регистрация
                </Typography>
              </Link>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
    {
      // TODO: mt: 12 is cringe
    }
    <Main sx={{ mt: 8, p: 2 }}>
      <Grid container spacing={2}>
        <Outlet />
      </Grid>
    </Main>
  </Box>
));
