import {Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      {/* 메뉴명 표현 */}
      <nav>
        <ul>
          <li className="float_left">
            <Link to="/menu1">MENU1</Link>
          </li>
          <li className="float_left">
            <Link to="/menu2">MENU2</Link>
            <ul>
              <li>
                <Link to="/menu2/sub1">SUB1</Link>
              </li>
              <li>
                <Link to="/menu2/sub2">SUB2</Link>
              </li>
            </ul>
          </li>
          <li className="float_left">
            <Link to="menu3">MENU3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
