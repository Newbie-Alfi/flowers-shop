import { Link, Outlet } from "react-router-dom";
import { observer } from "mobx-react-lite";
import {
  AppBar,
  Toolbar,
  Box,
  Tab,
  Typography,
  Button,
  Tabs,
} from "@mui/material";
// TODO: Импорт в верхних уровней
import { ROUTE } from "@pages/routes";
import { authStore } from "@shared/stores/authStore";

export const Navbar = observer(() => (
  <Box>
    <AppBar>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box>
          <Tabs>
            <Link to={ROUTE.ABOUT}>
              <Tab
                label={
                  <Typography color="white" sx={{ mr: 1 }} variant="button">
                    О нас
                  </Typography>
                }
              />
            </Link>
            <Link to={ROUTE.MAIN}>
              <Tab
                label={
                  <Typography color="white" sx={{ mr: 1 }} variant="button">
                    Каталог
                  </Typography>
                }
              />
            </Link>
            <Link to={ROUTE.SALES}>
              <Tab
                label={
                  <Typography color="white" sx={{ mr: 1 }} variant="button">
                    Акции
                  </Typography>
                }
              />
            </Link>
            {authStore.isAuthicated && (
              <Link to={ROUTE.BASKET}>
                <Tab
                  label={
                    <Typography color="white" sx={{ mr: 1 }} variant="button">
                      Корзина
                    </Typography>
                  }
                />
              </Link>
            )}
          </Tabs>
        </Box>
        <Box>
          {authStore.isAuthicated ? (
            <Button
              variant="outlined"
              sx={{ mr: 8 }}
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

    <Outlet />
  </Box>
));
