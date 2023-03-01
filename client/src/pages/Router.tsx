import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader } from "@shared/ui/Loader";
import { Navbar } from "@shared/ui/layouts/Navbar";
import { ROUTE } from "./routes";

import MainPage from "./Main";
import BasketPage from "./Basket";
import { AboutPage } from "./About";
import SalesPage from "./Sales";

const SignUpPage = lazy(() => import("./SignUp"));
const SignInPage = lazy(() => import("./SignIn"));
const NotFoundPage = lazy(() => import("./NotFound"));

export function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={ROUTE.MAIN} element={<Navbar />}>
            <Route index element={<MainPage />} />
            <Route path={ROUTE.ABOUT} element={<AboutPage />} />
            <Route path={ROUTE.SALES} element={<SalesPage />} />
            <Route path={ROUTE.BASKET} element={<BasketPage />} />
          </Route>
          <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
          <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
