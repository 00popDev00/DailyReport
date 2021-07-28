import React from "react";
import { BrowserRouter, Route, Switch, NavLink, Link } from "react-router-dom";

const Home = () => (
  <h1>
    <Link to="/about">About Click Me</Link>
  </h1>
);

const About = () => (
  <h1>
    <Link to="/Home">Home Click Me</Link>
  </h1>
);

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
