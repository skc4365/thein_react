import { BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./Nav";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import SUB1_menu2 from "./SUB1_menu2";
import SUB2_menu2 from "./SUB2_menu2";
import Menu3 from "./Menu3";

function Browser3() {
  return (
    <>
      <BrowserRouter>
      <h3> 메뉴-2 depth(Navigation별도 구현) </h3>
        {/* 네비게이션 */}
        <Nav/>
        
        {/* 경로 */}
        <Routes>
          <Route path="/menu1" element={<Menu1 />} />
          <Route path="/menu2" element={<Menu2 />}>
            <Route path="/menu2/sub1" element={<SUB1_menu2 />} />
            <Route path="/menu2/sub2" element={<SUB2_menu2 />} />
          </Route>
          <Route path="/menu3" element={<Menu3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Browser3;
