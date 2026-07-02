import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div className="bg">
      {/* <p>Products Page</p> */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/products/car">Cars</Link> |{" "}
        <Link to="/products/bike">Bikes</Link>
      </nav>
      {/* 하위 페이지가 출력되는 위치 */}
      <Outlet />
    </div>
  );
}

export default Products;
