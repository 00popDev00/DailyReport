import React from "react";
import { BrowserRouter, Route, Switch, NavLink, Link } from "react-router-dom";
import Dashboard from "./screen/Dashboard";
import Task from "./screen/Task";
import Developer from "./screen/Developer";
import Theme from "./theme";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Theme>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/task" component={Task}></Route>
          <Route exact path="/developerzone" component={Developer}></Route>
        </Theme>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
