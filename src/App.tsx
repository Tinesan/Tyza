import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import DataProvider from "./providers/DataProvider";
import Routes from "./routes";
import AuthContext from "providers/AuthProvider";

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
