import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import DataProvider from "./providers/DataProvider";

const client = new ApolloClient({
  uri: "http://localhost:5003/graphql/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <DataProvider>
        <Router>
          <Switch>
            <Route component={HomePage} exact path="/"></Route>
            <Route path="/admin" exact component={AdminPage}></Route>
          </Switch>
        </Router>
      </DataProvider>
    </ApolloProvider>
  );
}

export default App;
