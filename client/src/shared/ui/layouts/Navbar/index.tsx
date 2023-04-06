import { useMemo, useState, ReactNode } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Box, Paper, Typography, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// TODO: Импорт в верхних уровней
import { ROUTE, useRoute } from "@pages/routes";
import { api } from "@entities/api";
import { FlowerContext } from "@entities/Flower/store/hook";
import { FlowerStore } from "@entities/Flower/store";
import { authStore } from "@shared/stores/authStore";
import { Footer } from "@shared/ui/Footer";
import { useApi } from "@shared/api";
import { AuthView } from "@shared/ui/AuthView";

import flowerIcon from "./flovers.jpg";

// interface INavbarProps {
//   onChange(value: string): void;
//   children: React.ReactNode;
// }

interface INavbarItemProps {
  icon: ReactNode;
  text: ReactNode;
  route?(): void;
}

export const Navbar = observer(() => {
  // export const Navbar = observer((props: INavbarProps) => {
  // const {onChange, children} = props;
  const navigate = useNavigate();
  // const [selected, setSelected] = useState("main");
  const { toSignIn, toSignUp, toSales, toBasket, toMain, toUser } = useRoute();
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

  function NavbarItem(props: INavbarItemProps) {
    const { route, icon, text } = props;

    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ cursor: "pointer" }}
        onClick={route}
      >
        {icon}
        {text}
      </Box>
    );
  }

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
            <Typography
              sx={{ cursor: "pointer" }}
              onClick={toMain}
              variant="h4"
            >
              <img
                style={{
                  width: 60,
                  height: 60,
                  objectFit: "cover",
                  marginRight: 10,
                  borderRadius: "50%",
                }}
                alt="iKlumba"
                src={flowerIcon}
              />
              {/* iKlumba */}
            </Typography>
            <Box display="flex" sx={{ gap: 2 }}>
              <NavbarItem
                icon={<LoyaltyIcon />}
                text={<Typography sx={{ mr: 1 }}>Скидки</Typography>}
                route={toSales}
              />

              <AuthView>
                {/* <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  onClick={toBasket}
                >
                  <FavoriteIcon />
                  <Typography sx={{ mr: 1 }}>Желаймое</Typography>
                </Box> */}

                <NavbarItem
                  icon={<ShoppingBasketIcon />}
                  text={<Typography sx={{ mr: 1 }}>Корзина</Typography>}
                  route={toBasket}
                />
              </AuthView>
              <Box>
                {authStore.isAuthicated ? (
                  <NavbarItem
                    icon={<PersonIcon />}
                    text={<Typography sx={{ mr: 1 }}>Профиль</Typography>}
                    route={toUser}
                  />
                ) : (
                  <NavbarItem
                    icon={<PersonIcon />}
                    text={
                      <Box display="flex">
                        <Typography onClick={toSignIn}>Вход</Typography>
                        <Typography>/</Typography>
                        <Typography onClick={toSignUp}>Регистрация</Typography>
                      </Box>
                    }
                  />
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
