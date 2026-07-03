import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import SUB1_menu2 from "./SUB1_menu2";
import SUB2_menu2 from "./SUB2_menu2";

function App() {
  return (
    <>
      <Routes>
        {/* 공통 layout */}
        <Route path="/" element={<Layout />}>
          <Route path="menu1" element={<Menu1 />} />

          <Route path="menu2" element={<Menu2 />}>
            {/* <Outlet /> */} 
            <Route path="sub1" element={<SUB1_menu2 />} />
            <Route path="sub2" element={<SUB2_menu2 />} />
          </Route>

          <Route path="menu3" element={<Menu3 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
