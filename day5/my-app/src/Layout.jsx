import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Foooter from "./Foooter";
import "./Layout.css";

function Layout() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <main className="main">
        
        <Outlet /> {/* Route가 바뀌는 영역 */}
      </main>
      <Foooter />
    </div>
  );
}

export default Layout;
