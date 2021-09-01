import React, { useState } from "react";
import SideNav from "./sideNav";

const Theme = (props) => {
  return (
    <div className="d-flex min-vh-100">
      <SideNav />
      {props.children}
    </div>
  );
};

export default Theme;
