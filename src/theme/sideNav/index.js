import React, { useState } from "react";
import { BrowserRouter, Route, Switch, NavLink, Link } from "react-router-dom";
import "../index.css";

const SideNav = (props) => {
  return (
    <div className="side-nav">
      <i className="fa-500px fab fs-1 m-2 p-2"></i>
      <p></p>
      <div className="text-md-center my-2">
        <Link to="/" className="link-light">
          <i className="fas fa-align-justify fs-4"></i>
        </Link>
        {/* <label>Menu1</label> */}
      </div>
      <div className="text-md-center my-2">
        <Link to="/task" className="link-light">
          <i className="fas fa-key fs-4"></i>
        </Link>
        {/* <label>Menu1</label> */}
      </div>
      <div className="text-md-center my-2">
        <Link to="/developerzone" className="link-light">
          <i className="fas fa-plus fs-4"></i>
        </Link>
        {/* <label>Menu1</label> */}
      </div>
    </div>
  );
};
export default SideNav;
