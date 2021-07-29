import React from "react";
import { BrowserRouter, Route, Switch, NavLink, Link } from "react-router-dom";
import Dashboard from "./screen/Dashboard";
import Theme from "./theme";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Theme>
          <Route exact path="/" component={Dashboard}></Route>
        </Theme>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
