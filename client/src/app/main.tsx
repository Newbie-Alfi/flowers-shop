import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "@shared/ui/themes";
import ErrorBoundary from "@shared/ui/ErrorBoundary";
import { Router } from "@pages/index";

import "@shared/assets/scss/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>
);
