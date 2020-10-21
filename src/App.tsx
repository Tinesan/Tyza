import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  from,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import React from "react";

import AuthContext from "providers/AuthProvider";

import DataProvider from "./providers/DataProvider";
import Routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "pages/ErrorBoundary";

const client = new ApolloClient({
  link: createUploadLink({ uri: "http://localhost:5003/graphql/" }),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <AuthContext>
          <DataProvider>
            <Routes />
          </DataProvider>
        </AuthContext>
      </ApolloProvider>
    </ErrorBoundary>
  );
}

export default App;
