import "./App.css";
import MyApp from "./semantic/MyApp";
import MyApp3 from "./semantic/MyApp3";
import MyApp2 from "./semantic/MyApp2";
import Header from "./semantic/Header";
import Footer from "./semantic/Footer";
import MyUseReducer from "./semantic/MyUseReducer";
import WithoutMyCallback from "./semantic/WithoutMyCallback";
import MyUseCallBack from "./semantic/MyUseCallBack";
import WithoutMyUseMemo from "./semantic/WithoutMyUseMemo";
import MyUseMemo from "./semantic/MyUseMemo";
import WithoutMyCustomHook from "./semantic/WithoutMyCustomHook";
import MyCustomHook from "./semantic/MyCustomHook";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <MyCustomHook/>
      {/* <WithoutMyCustomHook/> */}
      {/* <MyUseMemo/>
      <WithoutMyUseMemo/> */}
      {/* <MyUseCallBack/>
      <WithoutMyCallback/> */}
      {/* <MyUseReducer/> */}
      {/* <MyApp3 />
      <MyApp2 />
      <MyApp /> */}
      <Footer/>
    </>
  );
}

export default App;
