import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import CarProducts from "./CarProducts";
import BikeProducts from "./BikeProducts";

// 메뉴-2 depth
function Browser2() {
  return (
    <>
      <BrowserRouter>
        <h3> 메뉴-2 depth(메인메뉴안에 서브메뉴) </h3>
        {/* 메뉴명 표현 */}
        <nav>
          <Link to="/">HOME</Link> |<Link to="/products">Products</Link> |
        </nav>

        {/* 경로 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route path="car" element={<CarProducts />} />
            <Route path="bike" element={<BikeProducts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Browser2;
