import { useNavigate } from "react-router-dom";

export const ROUTE = {
  MAIN: "/",
  ABOUT: "/about",
  SIGN_IN: "/sign_in",
  SIGN_UP: "/sign_up",
  SALES: "/sales",
  BASKET: "/basket",
  USER: "/user",
};

export const useRoute = () => {
  const navigate = useNavigate();

  return {
    toMain: () => navigate(ROUTE.MAIN),
    toAbout: () => navigate(ROUTE.ABOUT),
    toSignIn: () => navigate(ROUTE.SIGN_IN),
    toSignUp: () => navigate(ROUTE.SIGN_UP),
    toSales: () => navigate(ROUTE.SALES),
    toBasket: () => navigate(ROUTE.BASKET),
    toUser: () => navigate(ROUTE.USER),
  };
};
