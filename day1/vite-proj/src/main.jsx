import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './semantic/Header'
import Section from './semantic/Section'
import Footer from './semantic/Footer'
import Section2 from './semantic/Section2'
import Car1 from './semantic/Car1'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    {/* <Garage/> */}
    <Car1 color="redcolor"/>
    <Car1 color="bluecolor"/>
    <Car1 color="greencolor"/>
    {/* <Section/>
    <Section2/> */}
    <Footer/>


    {/* <Myapp /> */}
    {/* <App /> */}
  </StrictMode>,
)
