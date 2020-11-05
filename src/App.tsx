import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import ErrorBoundary from "pages/ErrorBoundary";
import AuthContext from "providers/AuthProvider";
import BasketProvider from "providers/BasketProvider";

import DataProvider from "./providers/DataProvider";
import Routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const client = new ApolloClient({
  link: createUploadLink({ uri: "http://localhost:5003/graphql/" }),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <ApolloProvider client={client}>
          <AuthContext>
            <DataProvider>
              <BasketProvider>
                <Router>
                  <Routes />
                </Router>
              </BasketProvider>
            </DataProvider>
          </AuthContext>
        </ApolloProvider>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
