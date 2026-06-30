import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './semantic/Header.jsx'
import MyUseState from './semantic/MyUseState.jsx'
import Footer from './semantic/Footer.jsx'
import MyApp from './semantic/MyApp.jsx'
import Square from './tictacto/Square.jsx'
import Board from './tictacto/Board.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    {/* 컴퍼넌트 각각의 상태값을 가지고 있다. */}
    <MyUseState/>
    <MyUseState/>
    <hr />
    {/* 상태값을 공유하려면 */}
    <MyApp/>
    
    {/* 틱택토게임 */}
    <hr />
    <Board/>
    
    {/* <App /> */}

     <Footer/>
  </StrictMode>,
)
