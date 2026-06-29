import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './semantic/Header.jsx'
import Garage from './semantic/Garage.jsx'
import Footer from './semantic/Footer.jsx'
import BasicExp from './semantic/BasicExp.jsx'
import Chapter08 from './semantic/Chapter08.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Chapter08/>
    {/* <BasicExp/> */}
    {/* <Garage /> */}
    <Footer/>
    {/* <App /> */}
  </StrictMode>,
)
