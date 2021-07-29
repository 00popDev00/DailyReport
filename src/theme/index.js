import React, { useState } from "react";
import SideNav from "./sideNav";

const Theme = (props) => {
  console.log(props);
  return (
    <div className="d-flex min-vh-100">
      <SideNav />
      Theme
      {props.children}
    </div>
  );
};

export default Theme;
