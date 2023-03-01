import React from "react";
import ReactDOM from "react-dom/client";
import ErrorBoundary from "@shared/ui/ErrorBoundary";
import { Router } from "@pages/index";

import "@shared/assets/scss/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  </React.StrictMode>
);
