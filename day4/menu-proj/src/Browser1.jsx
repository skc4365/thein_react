import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

function Browser1() {
  return (
    <BrowserRouter>
        <h3> 메뉴-1 depth </h3>
        {/* 메뉴명 표현 */}
        <nav>
            <Link to="/">HOME-홈</Link> |<Link to="contact">Contact</Link>
        </nav>

        {/* 경로 - Router : 메뉴에서 구성하는 경로를 알려줌 */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Browser1;
