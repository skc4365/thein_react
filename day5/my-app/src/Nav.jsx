import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <nav>
        <ul className="menu">
          <li>
            <Link to="/menu1">MENU1</Link>
          </li>
          <li>
            <Link to="/menu2">MENU2</Link>

            <ul className="submenu">
              <li>
                <Link to="/menu2/sub1">SUB1</Link>
              </li>
              <li>
                <Link to="/menu2/sub2">SUB2</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/menu3">MENU3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
