import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route component={HomePage} exact path="/"></Route>
          <Route path="/admin" exact component={AdminPage}>
            <div>222</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
