import React from "react";
import { Link, Outlet } from "react-router-dom";

function Menu2() {
  return (
    <div>
      Menu2
      <h1>Menu2</h1>
      <Link to="sub1">Sub1</Link>
      <Link to="sub2">Sub2</Link>
      <Outlet />
    </div>
  );
}

export default Menu2;
