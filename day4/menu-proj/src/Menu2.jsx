import { Outlet } from "react-router-dom";

function Menu2() {
  return (
    <div className="bg">
      Menu2
      {/* 하위 페이지가 출력되는 위치 */}
      <Outlet />
    </div>
  );
}

export default Menu2;
