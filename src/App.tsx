import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import ErrorBoundary from "pages/ErrorBoundary";
import Apollo from "providers/Apollo";
import AuthContext from "providers/AuthProvider";
import BasketProvider from "providers/BasketProvider";

import DataProvider from "./providers/DataProvider";
import Routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const LOCATION_PROTOKOL = `http://`;

function App() {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <AuthContext>
          <Apollo>
            <DataProvider>
              <BasketProvider>
                <Router>
                  <Routes />
                </Router>
              </BasketProvider>
            </DataProvider>
          </Apollo>
        </AuthContext>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
