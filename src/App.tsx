import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";

import AuthContext from "providers/AuthProvider";

import DataProvider from "./providers/DataProvider";
import Routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";

const client = new ApolloClient({
  uri: "http://localhost:5003/graphql/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthContext>
        <DataProvider>
          <Routes />
        </DataProvider>
      </AuthContext>
    </ApolloProvider>
  );
}

export default App;
