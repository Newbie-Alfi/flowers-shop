import { Link, Outlet, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Box, Paper, Typography, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import FavoriteIcon from "@mui/icons-material/Favorite";
// TODO: Импорт в верхних уровней
import { ROUTE } from "@pages/routes";
import { api } from "@entities/api";
import { FlowerContext } from "@entities/Flower/store/hook";
import { FlowerStore } from "@entities/Flower/store";

//
import { authStore } from "@shared/stores/authStore";
import { Footer } from "@shared/ui/Footer";
import { useApi } from "@shared/api";

import { useMemo, useState } from "react";

// interface INavbarProps {
//   onChange(value: string): void;
//   children: React.ReactNode;
// }

export const Navbar = observer(() => {
  // export const Navbar = observer((props: INavbarProps) => {
  // const {onChange, children} = props;
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const { value } = useApi(
    () =>
      api.flowers.list({
        params: {
          name: productName,
        },
      }),
    [productName]
  );

  const store = useMemo(
    () => new FlowerStore(value?.data.results || []),
    [value]
  );

  return (
    <FlowerContext.Provider value={store}>
      <Box sx={{ minHeight: "100vh", width: "100%" }}>
        <Paper sx={{ p: 2, mb: 2 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link color="inherit" to={ROUTE.MAIN}>
              <Typography variant="h4">iKlumba</Typography>
            </Link>
            <Box display="flex" sx={{ gap: 2 }}>
              <Link to={ROUTE.SALES}>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <LoyaltyIcon />
                  <Typography sx={{ mr: 1 }}>Скидки</Typography>
                </Box>
              </Link>
              {authStore.isAuthicated && (
                <>
                  <Link to={ROUTE.BASKET}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <FavoriteIcon />
                      <Typography sx={{ mr: 1 }}>Желаймое</Typography>
                    </Box>
                  </Link>
                  <Link to={ROUTE.BASKET}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <ShoppingBasketIcon />
                      <Typography sx={{ mr: 1 }}>Корзина</Typography>
                    </Box>
                  </Link>
                </>
              )}
              <Box>
                {authStore.isAuthicated ? (
                  <Link to={ROUTE.USER}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <PersonIcon />
                      <Typography sx={{ mr: 1 }}>Профиль</Typography>
                    </Box>
                  </Link>
                ) : (
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <PersonIcon />
                    <Box>
                      <Link to={ROUTE.SIGN_IN}>Вход</Link> /
                      <Link to={ROUTE.SIGN_UP}> Регистрация</Link>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" sx={{ width: "100%" }}>
            <TextField
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
                // TODO: постоянно вызывается
                navigate(ROUTE.MAIN);
              }}
              sx={{ mt: 3, width: "90%" }}
              placeholder="Я ищу..."
            />
          </Box>
        </Paper>

        <Box sx={{ pl: 2, pr: 2, height: "100%" }}>
          <Box sx={{ height: "100%" }}>
            <Outlet />
            {/* {children} */}
          </Box>

          <Footer />
        </Box>
      </Box>
    </FlowerContext.Provider>
  );
});
